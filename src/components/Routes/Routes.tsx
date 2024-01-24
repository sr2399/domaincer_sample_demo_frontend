import DashBoardScreen  from '../Navigation/layout/components/dashBoard'

export const samplePaths = {
  dashBoard: '/dashBoard/:token',
};


export const sampleRoutes: any = [
  {
    path: samplePaths.dashBoard,
    component: DashBoardScreen,
  },

];
