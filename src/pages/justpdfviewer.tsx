import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ReactComponent as Logo } from "../svg/newlogo.svg";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`,
    import.meta.url,
).toString();


const JustPdfViewer: React.FC<any> = (props) => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(3);
    const { width } = useWindowDimensions();


    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div
        >
            <div style={{
            }}
            >
                <Document file="/pdf/introduce1.pdf" onLoadSuccess={onDocumentLoadSuccess}
                loading={
                    <div className="loadingPageDiv" style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Logo className="loadingPageLogo" />
                <div>

                </div>
              </div>
                }
                >
                    {
                        Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <div
                                >
                                    <Page
                                        loading=""
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        width={width}
                                        renderAnnotationLayer={false}
                                        renderTextLayer={false}
                                    />
                                    <div
                                    style={{
                                        height : "50px"
                                    }}
                                    >
                                    </div> 
                                </div>

                            ),
                        )
                    }
                </Document>
            </div>
        </div>
    )
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<{
        width: number;
        height: number;
    }>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // function handleResize() {
        //     setWindowDimensions({
        //         width: window.innerWidth,
        //         height: window.innerHeight,
        //     });
        // }

        // window.addEventListener('resize', handleResize);
        // return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default JustPdfViewer;