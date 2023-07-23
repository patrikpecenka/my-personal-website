import AppShell from './AppShell'

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
