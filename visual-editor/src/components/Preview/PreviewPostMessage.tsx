import type { PreviewProps } from 'src/components/Preview/Preview'
import { StyledIframe } from 'src/components/Preview/Preview'
import { useEffect, useRef, useState } from 'react'
import {
  useFocusIndex,
  useRemoveBloc,
  useSetBlockIndex,
  useSetFocusIndex,
} from 'src/store'
import { type EditorComponentData } from 'src/types'
import { PreviewWrapper } from 'src/components/Preview/PreviewWrapper'

type IframeEvents =
  | {
      type: 've-focus'
      payload: { id: string }
    }
  | {
      type: 've-add'
      payload: { id: string }
    }
  | {
      type: 've-remove'
      payload: { id: string }
    }

export type EditorMessageEvents =
  | {
      type: 've-focus'
      payload: { id: string }
    }
  | {
      type: 've-data'
      payload: EditorComponentData[]
    }

/**
 * Alternative preview component based on postMessage to communicate using
 * cross domain
 */
export function PreviewPostMessage({ data, previewUrl }: PreviewProps) {
  const iframe = useRef<HTMLIFrameElement>(null)
  const [loaded, setLoaded] = useState(false)
  let transform = undefined
  const setFocusIndex = useSetFocusIndex()
  const setAddBlockIndex = useSetBlockIndex()
  const removeBloc = useRemoveBloc()
  const focusIndex = useFocusIndex()
  const previewUrlRef = useRef(previewUrl)
  previewUrlRef.current = previewUrl

  useEffect(() => {
    const listener = (e: MessageEvent<IframeEvents>) => {
      switch (e.data.type) {
        case 've-focus':
          setFocusIndex(e.data.payload.id)
          break
        case 've-add':
          setAddBlockIndex(e.data.payload.id)
          break
        case 've-remove':
          removeBloc(e.data.payload.id)
          break
      }
    }
    window.addEventListener('message', listener)
    return () => {
      window.removeEventListener('message', listener)
    }
  }, [])

  useEffect(() => {
    if (loaded && iframe.current && iframe.current.contentWindow) {
      iframe.current.contentWindow.postMessage(
        {
          type: 've-data',
          payload: data,
        },
        previewUrlRef.current
      )
    }
  }, [loaded, data])

  useEffect(() => {
    if (iframe.current && iframe.current.contentWindow) {
      iframe.current.contentWindow.postMessage(
        {
          type: 've-focus',
          payload: { id: focusIndex },
        },
        previewUrlRef.current
      )
    }
  }, [focusIndex])

  const previewURLWithReferrer = new URL(previewUrl)
  previewURLWithReferrer.searchParams.set(
    'referrer',
    window.location.toString()
  )

  return (
    <PreviewWrapper>
      <StyledIframe
        ref={iframe}
        src={previewURLWithReferrer.toString()}
        loaded={loaded}
        style={transform}
        onLoad={() => setLoaded(true)}
      />
    </PreviewWrapper>
  )
}
