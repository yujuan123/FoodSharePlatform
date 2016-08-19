export const menusLoader = (menuItems)=> ({
  type: MENUS_LOADED,
  menuItems
});

export const loadMenuDetail = (data)=> {
  return {
    type: MENUDETAIL_LOADED,
    data
  };
};

export const addMaterial = (data)=> ({
  type: 'ADD_MATERIAL',
  data
});

export const deleteMaterial = (id) => ({
  type: 'DELETE_MATERIAL',
  id
});

export const getItemId = (id) => ({
  type:'ID_GETTER',
  id
});


export const MENUDETAIL_LOADED = 'MENUDETAIL_LOADED';
export const MENUS_LOADED = 'MENUS_LOADED';
export const ID_GETTER = 'ID_GETTER';