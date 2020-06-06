import React from 'react';
class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.closeButton = null;
	}

	closeModal() {
		this.closeButton.click();
	}

	submitModal = () => {
		this.closeModal();
	};

	render() {
		return (
			<div>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
					Create your own Cocktail
				</button>

				<div
					className="modal fade"
					id="exampleModalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLongTitle">
									Create a Cocktail
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">{this.props.children}</div>
							<div className="modal-footer">
								<button
									ref={(ele) => (this.closeButton = ele)}
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								{this.props.hasSubmit && (
									<button onClick={this.submitModal} type="button" className="btn btn-primary">
										Save changes
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
// const Modal = (props) => {
// 	let closeButton = null;
// 	const submitModal = () => {
// 		closeButton.click();
// 	};

// 	return (
// 		<div>
// 			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
// 				Create your own Cocktail
// 			</button>

// 			<div
// 				className="modal fade"
// 				id="exampleModalCenter"
// 				tabIndex="-1"
// 				role="dialog"
// 				aria-labelledby="exampleModalCenterTitle"
// 				aria-hidden="true"
// 			>
// 				<div className="modal-dialog modal-dialog-centered" role="document">
// 					<div className="modal-content">
// 						<div className="modal-header">
// 							<h5 className="modal-title" id="exampleModalLongTitle">
// 								Create a Cocktail
// 							</h5>
// 							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
// 								<span aria-hidden="true">&times;</span>
// 							</button>
// 						</div>
// 						<div className="modal-body">{props.children}</div>
// 						<div className="modal-footer">
// 							<button
// 								ref={(ele) => (closeButton = ele)}
// 								type="button"
// 								className="btn btn-secondary"
// 								data-dismiss="modal"
// 							>
// 								Close
// 							</button>
// 							{props.hasSubmit && (
// 								<button onClick={submitModal} type="button" className="btn btn-primary">
// 									Save changes
// 								</button>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default Modal;
