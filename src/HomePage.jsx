import React from 'react';

export default function HomePage() {
    return (
        <>
            {/* <h1> This is for my homepage</h1> */}
            <div className="container mainVisual m-auto p-5">
                <div className="row h-100 w-100">
                    <div className="col-7 h-100 bg-light">left</div>
                    <div className="col-5 p-0">
                        <div className="d-flex flex-wrap h-100 w-100">
                            <div className="col-12 bg-light py-2 mx-2">1</div>
                            <div className="col-12 bg-light py-2 mx-2 mt-2">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
