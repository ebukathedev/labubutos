const Footer: React.FC = () => {
	const year = new Date().getFullYear();
	
	return (
		<footer className="py-4 bg-brand">
			<div className="container px-4 text-lg tracking-widest text-center font-brand">
				Copyright © {year} - Labubutos
			</div>
		</footer>
	);
};

export default Footer;
