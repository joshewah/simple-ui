import CodeMirror from '@uiw/react-codemirror'
import { createTheme } from '@uiw/codemirror-themes'
import { javascript } from '@codemirror/lang-javascript'
import { tags as t } from '@lezer/highlight'
import { Copy } from 'lucide-react'

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
    gutterActiveForeground: '#707070',
    lineHighlight: '#18181b',
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

type CodePreviewProps = {
  code: string
}

function CodePreview({
  code = "console.log('hello world!')",
}: CodePreviewProps) {
  return (
    <div className="code-preview--wrapper">
      <header className="code-preview--header">
        <h6 className="text-xs tracking-wide">filename.tsx</h6>
        <button>
          <Copy size={12} strokeWidth={2.5} />
        </button>
      </header>
      <CodeMirror
        value={code}
        height="200px"
        theme={myTheme}
        extensions={[javascript({ jsx: true })]}
        basicSetup={{
          foldGutter: false,
          highlightActiveLine: false,
        }}
        editable={false}
      />
    </div>
  )
}
export default CodePreview
