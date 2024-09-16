import Header from '../../components/header/header';
import MinimalHeader from '../../components/header/minimalHeader';
import Footer from '../../components/footer/footer';

declare type HeaderType = 'full' | 'minimal' | 'none';
declare type FooterType = 'full' | 'none';

const PageHeader = ({ header }: { header?: HeaderType }) => {
	if (header === 'minimal') {
		return <MinimalHeader />;
	}
	else if (header === 'none') {
		return <></>;
	}
	else {
		return <Header />
	}
};

const PageFooter = ({ footer }: { footer?: FooterType }) => {
	if (footer === 'none') {
		return <></>;
	}
	else {
		return <Footer />
	}
};

function Layout({
	header,
	footer,
	children
}: {
	header?: HeaderType;
	footer?: FooterType;
	children: any;
}) {

	return (
		<div className="page-container">
			<PageHeader header={header} />
			{children}
			<PageFooter footer={footer} />
		</div>
	);
}

Layout.defaultProps = {
	header: 'full',
	footer: 'full'
}

export default Layout;