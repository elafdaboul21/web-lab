import './App.css'

function App() {
  return (
    <main>
      <div className="app-container">
        <h1>Web Tasarimi ve Programlama</h1>
        <h2>LAB-1</h2>

        <div className="info-card">
          <p><strong>Ad Soyad:</strong> Eyllaf Dabboul</p>
          <p><strong>Ogrenci No:</strong> 220541607</p>
        </div>

        <div className="hakkimda-card">
          <h3>Hakkimda</h3>
          <p>
            Merhabalar! Ben Eyllaf Dabboul. Fırat üniversitesi Yazılım
            Mühendisliği bölümünde öğrenciyim.
          </p>

          <h3>Hobiler</h3>
          <ul>
            <li>Programlama</li>
            <li>Web Tasarimi</li>
            <li>Problem Cözme</li>
          </ul>
        </div>

        <p className="lab-note">
          Bu proje Vite + React + TypeScript ile olusturulmustur.
        </p>
      </div>
    </main>
  )
}

export default App
