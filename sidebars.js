module.exports = {
  someSidebar: {
    'Getting Started': ['MainNavigation'],
    Sessions: [
      'Session/Sessions', 
      'Session/SessionStatuses',
      'Session/CreateEditCancelSession',
      'Session/DataCollection',
      'Session/EditSession',
      'Session/PaperDataCollection',
      {
        'Data Collection': [
          'Session/DataCollection/DataCollectionTargetList',
          'Session/DataCollection/DataCollectionTargetCard',
          'Session/DataCollection/EditDataAfterSession'
        ]
      }
    ],
    'Care Plan':[
      'CarePlan/Structure',
      'CarePlan/Libraries',
      'CarePlan/ViewCarePlan',
      'CarePlan/ViewGoal',
      'CarePlan/ViewTarget',
      'CarePlan/TargetLifecycle',
      'CarePlan/TargetConfiguration',
      'CarePlan/AddGoal',
      'CarePlan/AddTarget',
      'CarePlan/AddBx',
      'CarePlan/EditTarget',
      'CarePlan/RemoveGoal',
    ]
  },
};
