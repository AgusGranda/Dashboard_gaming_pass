import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowData from './ContentRowData';
 

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Panel</h1>
					</div>
					<div className="d-flex flex-column" id="content-wrapper">
					<ContentRowData />
					<ContentRowCenter />
					</div>
					{/*<!-- Content Row Movies-->*/}
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;