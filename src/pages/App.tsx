import AppShell from './AppShell'
import 'styles/App.css'

let tabTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "😢 Come Back 😢"
});

window.addEventListener("focus", () => {
  document.title = tabTitle;
});


function App() {

  return(
    <>
      <AppShell />
    </>
  )
}

export default App
