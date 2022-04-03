import * as React from 'react';
import {
  GridApi,
  GridColumns,
  gridColumnVisibilityModelSelector,
  GridEvents,
  GridRowGroupingModel,
  useGridApiRef,
} from '@mui/x-data-grid-pro';


const useKeepGroupingColumnsHidden = (
    apiRef: React.MutableRefObject<GridApi>,
    columns: GridColumns,
    initialModel: GridRowGroupingModel,
    leafField?: string,
  ) => {
    const prevModel = React.useRef(initialModel);
  
    React.useEffect(() => {
      apiRef.current.subscribeEvent(GridEvents.rowGroupingModelChange, (newModel) => {
        const columnVisibilityModel = {
          ...gridColumnVisibilityModelSelector(apiRef),
        };
        newModel.forEach((field) => {
          if (!prevModel.current.includes(field)) {
            columnVisibilityModel[field] = false;
          }
        });
        prevModel.current.forEach((field) => {
          if (!newModel.includes(field)) {
            columnVisibilityModel[field] = true;
          }
        });
        apiRef.current.setColumnVisibilityModel(columnVisibilityModel);
        prevModel.current = newModel;
      });
    }, [apiRef]);
  
    return React.useMemo(
      () =>
        columns.map((colDef) =>
          initialModel.includes(colDef.field) ||
          (leafField && colDef.field === leafField)
            ? { ...colDef, hide: true }
            : colDef,
        ),
      [columns, initialModel, leafField],
    );
  };

  export default useKeepGroupingColumnsHidden;