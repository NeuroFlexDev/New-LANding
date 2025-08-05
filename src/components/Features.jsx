const items = [
    { title: 'Скорость', desc: 'Молниеносная загрузка страниц.' },
    { title: 'Адаптивность', desc: 'Работа на любых устройствах.' },
    { title: 'Поддержка', desc: 'Гарантийное сопровождение.' },
  ]
  
  export default function Features() {
    return (
      <section className="container" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', padding: '4rem 0' }}>
        {items.map(item => (
          <div key={item.title} style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    )
  }
  