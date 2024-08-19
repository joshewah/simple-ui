import './../styles/globals.css'

const Introduction = () => {
  return (
    <main className='content'>
      <section>
        <h1 className='page-heading'>Introduction</h1>
        <p>
          TO_BE_NAMED is a carefully designed and create components that you can
          copy and paste into your apps.
        </p>
        <p>
          This is NOT a component library. It's a collection of re-usable
          components that you can copy and paste into your apps.
        </p>
        <p>
          What do you mean by not a component library? I mean you do not install
          it as a dependency. It is not available or distributed via npm. Pick
          the components you need. Copy and paste the code into your project and
          customize to your needs. The code is yours.
        </p>
      </section>
      <section>
        <h2>FAQ</h2>
        <Accordion />
      </section>
    </main>
  )
}

export const Accordion = () => {
  return (
    <>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
    </>
  )
}

export default Introduction
