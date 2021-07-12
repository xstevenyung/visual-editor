import {
  Button,
  Checkbox,
  Color,
  ImageUrl,
  Repeater,
  Text,
  VisualEditor,
} from 'src/VisualEditor'
import { HTMLText } from './fields/HTMLText'

let editor = new VisualEditor()
const textPalette = ['--pink', '--purple', '--blue', '--green']

editor.registerComponent('hero', {
  title: 'Hero',
  fields: [
    new HTMLText('title', {
      label: 'Titre',
      multiline: false,
      colors: textPalette,
    }),
    new Color('background', { label: 'Couleur de fond', colors: textPalette }),
    new HTMLText('body', { label: 'Description', colors: textPalette }),
    new Repeater('actions', {
      title: 'Actions',
      addLabel: 'Ajouter un bouton',
      fields: [new Button('action')],
    }),
  ],
})
editor.registerComponent('steps', {
  title: 'Etapes',
  fields: [
    new ImageUrl('image', {
      label: 'Image',
      onBrowse: (url) => Promise.resolve('https://picsum.photos/425/458'),
    }),
    new Text('title', { label: 'Titre' }),
    new Text('caption', { label: "Mention sous l'image" }),
    new Checkbox('inversed', { label: 'Image à droite ?' }),
    new Repeater('steps', {
      title: 'Étapes',
      addLabel: 'Ajouter une étape',
      fields: [new Text('step', {})],
    }),
  ],
})
editor.registerComponent('html', {
  title: 'HTML',
  fields: [new HTMLText('html', { allowHeadings: true })],
})
editor.defineElement()
