
type TopBarProps = {
    pageTitle: String
}

const TopBar = ({ pageTitle }: TopBarProps) => {
    return (
      <header className="top-bar">
        <h1 className="page-title">{pageTitle}</h1>
      </header>
    )
}

export default TopBar;