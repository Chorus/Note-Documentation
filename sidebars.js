module.exports = {
  someSidebar: {
    'Getting Started': ['MainNavigation'],
    Sessions: [
      'Session/Sessions', 
      'Session/SessionStatuses',
      'Session/CreateEditCancelSession',
      'Session/EditSession',
      'Session/PaperDataCollection'
    ],
    'Data Collection':[
      'DataCollection/DataCollectionOnTargetList',
      'DataCollection/DataCollectionOnTargetCard',
      'DataCollection/EditDataAfterSession',
    ],
    'Care Plan':[
      'CarePlan/CarePlanStructure',
      'CarePlan/UnderstandingHierarchy',
      'CarePlan/CarePlanViews',
    ],
    'Goals':[
      'Goals/AddEditRemoveGoals',
      'Goals/GoalLibrary',
    ],
    'Targets':[
      'Targets/AddEditRemoveTargets',
      'Targets/TargetLibrary',
      'Targets/DefaultConfiguration',
      'Targets/TargetStatuses',
    ],
    'Behaviors':[
      'Behaviors/AddEditRemoveBehaviors',
      'Behaviors/AddEditRemoveObjectives',
    ],
    'Reports':[
      'Reports/Graphs',
      'Reports/ActivityReport',
      'Reports/CareTeamManagement',
    ],
    'Settings':[
      'Settings/Sync',
      'Settings/ModifyPIN',
    ]
  },
};
