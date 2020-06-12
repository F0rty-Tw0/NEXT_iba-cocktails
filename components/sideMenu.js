const SideMenu = (props) => {
	const { alcohol } = props;

	return (
		<React.Fragment>
			<div className="dropleft float-right">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropleftMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					{props.appName}
				</button>			
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{alcohol.map((alcohol) => (
						<a
							onClick={() => props.changeCategory(alcohol.name)}
							key={alcohol.id}
							className={`dropdown-item ${props.activeCategory === alcohol.name ? 'active' : ''}`}
						>
							{alcohol.name}
						</a>
					))}
				</div>
				<style jsx>
					{`
						a {
							cursor: pointer;
						}
					`}
				</style>
			</div>
		</React.Fragment>
	);
};

export default SideMenu;
