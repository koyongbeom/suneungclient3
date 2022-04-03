import { useEffect } from 'react';
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


function CustomPagination(props: any) {
    const apiRef : any = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={page + 1}
            count={pageCount}
            renderItem={(props2: any) => {
                if (props2.type === "page" && props2.selected === true) {
                    props2.page = props2.page + "교시"
                }
                return (
                    <div>
                        <PaginationItem {...props2} disableRipple />
                    </div>
                )
            }
            }
            onChange={(event: React.ChangeEvent<unknown>, value: number) => {
                console.log(apiRef.current.state.rows.idRowsLookup);
                if(apiRef.current.state.rows.idRowsLookup["1"]){
                    apiRef.current.state.rows.idRowsLookup["1"].props();
                }
                apiRef.current.setPage(value - 1);
            }
            }
        />
    );
}

export default CustomPagination;