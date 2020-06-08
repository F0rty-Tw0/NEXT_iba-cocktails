const Carousel = (props) => {
	const { images } = props;
	return (
		<div>			
			{/* <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
				<ol className="carousel-indicators">
					{images.map((image, index) => (
						<li
							key={image.id}
							data-target="#carouselExampleIndicators"
							data-slide-to={index}
							className={index === 0 ? 'active' : ''}
						/>
					))}
				</ol>

				<div className="carousel-inner" role="listbox">
					{images.map((image, index) => (
						<div key={image.id} className={`carousel-item text-center ${index === 0 ? 'active' : ''}`}>
							<img className="d-block img-fluid" src={image.imageUrl} alt={image.title} />
							<div className="carousel-caption d-none d-md-block">
								<h5>{image.title}</h5>
							</div>
						</div>
					))}
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
				<style jsx>
					{`
						div {
							height: 400px;
						}
						img {
							min-width: 100%;
							margin: auto;
						}
					`}
				</style>
			</div> */}
		</div>
	);
};

export default Carousel;
