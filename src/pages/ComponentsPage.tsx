import '../styles/component.css'

const ComponentsPage = () => {
  return (
    <main className='content'>
      <h1 className='page-heading'>Components</h1>
      <section>
        <ComponentCard name='Accordion' />
      </section>
    </main>
  )
}

const ComponentCard = ({ name }: { name: string }) => {
  return (
    <div className='component-card'>
      <p>{name}</p>
    </div>
  )
}

export default ComponentsPage
