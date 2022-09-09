import style from '../stylesheets/ErrorPage.module.css'

function ErrorPage() {
  return (
    <div>
      <main>
        <h1 className={style.headline}>Error: The page you were looking for does not exist</h1>
      </main>
    </div>
  )
}

export default ErrorPage;