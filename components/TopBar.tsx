import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

type TopBarProps = {
    pageTitle: String
}

const TopBar = ({ pageTitle }: TopBarProps) => {
    return (
      <header className="top-bar">
        <h1 className="page-title">{pageTitle}</h1>
        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
      </header>
    )
}

export default TopBar;