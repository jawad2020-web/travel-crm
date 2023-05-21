export default {
  table: {
    apiSetting: {
      // field name of the current page
      pageField: 'page',
      // Field name of quantity per page
      sizeField: 'pageSize',
      // The name of the data field returned by the interface
      listField: 'list',
      // The interface returns the field name of the total number of pages
      totalField: 'pageCount',
    },
    //Default number of pages
    defaultPageSize: 10,
    //Can switch the quantity collection per page
    pageSizes: [10, 20, 30, 40, 50],
  },
  upload: {
    //Consider different interface specifications
    apiSetting: {
      // collection field name
      infoField: 'data',
      // image address field name
      imgField: 'photo',
    },
    //Maximum upload image size
    maxSize: 2,
    //Image upload type
    fileType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
  },
};
