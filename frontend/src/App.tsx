function App() {
  const news = [
    { id: 1, text: 'news1' },
    { id: 2, text: 'news2' },
    { id: 3, text: 'news3' },
    { id: 4, text: 'news4' },
    { id: 5, text: 'news5' },
    { id: 6, text: 'news6' },
  ]
  return (
    <div>
      <h1>News Discussion</h1>
      <p>news list:</p>
      {news.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  )
}

export { App }
