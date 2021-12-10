import './style.scss'

export default function ReportChoose(){
    return(
        <div className="report-choose-container">
            <h2 className="page-header">Report and statistical</h2>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {/* {
                                isLoading ? <div>Loading...</div> : 
                                (userList && userList.length > 0) ? <div>
                                <Table
                                    limit='5'
                                    headData={userTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={userList}
                                    renderBody={(item, index, currIndexStart) => renderBody(item, index)}
                                    passChildData={setCurrIndexStart}
                                /> 
                                </div>
                                : <div>Data is empty</div>
                            }                     */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}