import CodeMirror from '@uiw/react-codemirror'
import { createTheme } from '@uiw/codemirror-themes'
import { javascript } from '@codemirror/lang-javascript'
import { tags as t } from '@lezer/highlight'

const myTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#18181b',
    backgroundImage: '',
    foreground: '#a7a7a7',
    caret: '#ffffff',
    selection: '#385475',
    selectionMatch: '#18181b',
    gutterBackground: '#18181b',
    gutterForeground: '#707070',
    gutterBorder: '#18181b',
    gutterActiveForeground: '#000000',
    lineHighlight: '#385475',
  },
  styles: [
    { tag: t.comment, color: '#787b80' },
    { tag: t.definition(t.typeName), color: '#194a7b' },
    { tag: t.typeName, color: '#194a7b' },
    { tag: t.tagName, color: '#ffffff' },
    { tag: t.variableName, color: '#ffffff' },
    { tag: t.propertyName, color: '#ffffff' },
  ],
})

function CodePreview() {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      theme={myTheme}
      extensions={[javascript({ jsx: true })]}
      basicSetup={{
        foldGutter: false,
        highlightActiveLine: false,
      }}
      editable={false}
    />
  )
}
export default CodePreview
