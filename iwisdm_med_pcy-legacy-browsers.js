/*********************** 
 * Iwisdm_Med_Pcy *
 ***********************/


// store info about the experiment session:
let expName = 'iwisdm_med_pcy';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(new_trialRoutineBegin());
flowScheduler.add(new_trialRoutineEachFrame());
flowScheduler.add(new_trialRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);




flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions_medium.csv', 'path': 'conditions_medium.csv'},
    {'name': './for_xx/trial9/frames/epoch0.png', 'path': './for_xx/trial9/frames/epoch0.png'},
    {'name': './for_xx/trial9/frames/epoch1.png', 'path': './for_xx/trial9/frames/epoch1.png'},
    {'name': './for_xx/trial9/frames/epoch2.png', 'path': './for_xx/trial9/frames/epoch2.png'},
    {'name': './for_xx/trial9/frames/epoch3.png', 'path': './for_xx/trial9/frames/epoch3.png'},
    {'name': './for_xx/trial9/frames/epoch4.png', 'path': './for_xx/trial9/frames/epoch4.png'},
    {'name': './for_xx/trial9/frames/epoch5.png', 'path': './for_xx/trial9/frames/epoch5.png'},
    {'name': './for_xx/trial9/frames/epoch6.png', 'path': './for_xx/trial9/frames/epoch6.png'},
    {'name': './for_xx/trial9/frames/epoch7.png', 'path': './for_xx/trial9/frames/epoch7.png'},
    {'name': './for_xx/trial204/frames/epoch0.png', 'path': './for_xx/trial204/frames/epoch0.png'},
    {'name': './for_xx/trial204/frames/epoch1.png', 'path': './for_xx/trial204/frames/epoch1.png'},
    {'name': './for_xx/trial204/frames/epoch2.png', 'path': './for_xx/trial204/frames/epoch2.png'},
    {'name': './for_xx/trial204/frames/epoch3.png', 'path': './for_xx/trial204/frames/epoch3.png'},
    {'name': './for_xx/trial204/frames/epoch4.png', 'path': './for_xx/trial204/frames/epoch4.png'},
    {'name': './for_xx/trial204/frames/epoch5.png', 'path': './for_xx/trial204/frames/epoch5.png'},
    {'name': './for_xx/trial204/frames/epoch6.png', 'path': './for_xx/trial204/frames/epoch6.png'},
    {'name': './for_xx/trial204/frames/epoch7.png', 'path': './for_xx/trial204/frames/epoch7.png'},
    {'name': './for_xx/trial0/frames/epoch0.png', 'path': './for_xx/trial0/frames/epoch0.png'},
    {'name': './for_xx/trial0/frames/epoch1.png', 'path': './for_xx/trial0/frames/epoch1.png'},
    {'name': './for_xx/trial0/frames/epoch2.png', 'path': './for_xx/trial0/frames/epoch2.png'},
    {'name': './for_xx/trial0/frames/epoch3.png', 'path': './for_xx/trial0/frames/epoch3.png'},
    {'name': './for_xx/trial0/frames/epoch4.png', 'path': './for_xx/trial0/frames/epoch4.png'},
    {'name': './for_xx/trial0/frames/epoch5.png', 'path': './for_xx/trial0/frames/epoch5.png'},
    {'name': './for_xx/nullframe.png', 'path': './for_xx/nullframe.png'},
    {'name': './for_xx/trial7/frames/epoch0.png', 'path': './for_xx/trial7/frames/epoch0.png'},
    {'name': './for_xx/trial7/frames/epoch1.png', 'path': './for_xx/trial7/frames/epoch1.png'},
    {'name': './for_xx/trial7/frames/epoch2.png', 'path': './for_xx/trial7/frames/epoch2.png'},
    {'name': './for_xx/trial7/frames/epoch3.png', 'path': './for_xx/trial7/frames/epoch3.png'},
    {'name': './for_xx/trial7/frames/epoch4.png', 'path': './for_xx/trial7/frames/epoch4.png'},
    {'name': './for_xx/trial7/frames/epoch5.png', 'path': './for_xx/trial7/frames/epoch5.png'},
    {'name': './for_xx/trial7/frames/epoch6.png', 'path': './for_xx/trial7/frames/epoch6.png'},
    {'name': './for_xx/trial7/frames/epoch7.png', 'path': './for_xx/trial7/frames/epoch7.png'},
    {'name': './for_xx/trial203/frames/epoch0.png', 'path': './for_xx/trial203/frames/epoch0.png'},
    {'name': './for_xx/trial203/frames/epoch1.png', 'path': './for_xx/trial203/frames/epoch1.png'},
    {'name': './for_xx/trial203/frames/epoch2.png', 'path': './for_xx/trial203/frames/epoch2.png'},
    {'name': './for_xx/trial203/frames/epoch3.png', 'path': './for_xx/trial203/frames/epoch3.png'},
    {'name': './for_xx/trial203/frames/epoch4.png', 'path': './for_xx/trial203/frames/epoch4.png'},
    {'name': './for_xx/trial203/frames/epoch5.png', 'path': './for_xx/trial203/frames/epoch5.png'},
    {'name': './for_xx/trial203/frames/epoch6.png', 'path': './for_xx/trial203/frames/epoch6.png'},
    {'name': './for_xx/trial203/frames/epoch7.png', 'path': './for_xx/trial203/frames/epoch7.png'},
    {'name': './for_xx/trial6/frames/epoch0.png', 'path': './for_xx/trial6/frames/epoch0.png'},
    {'name': './for_xx/trial6/frames/epoch1.png', 'path': './for_xx/trial6/frames/epoch1.png'},
    {'name': './for_xx/trial6/frames/epoch2.png', 'path': './for_xx/trial6/frames/epoch2.png'},
    {'name': './for_xx/trial6/frames/epoch3.png', 'path': './for_xx/trial6/frames/epoch3.png'},
    {'name': './for_xx/trial6/frames/epoch4.png', 'path': './for_xx/trial6/frames/epoch4.png'},
    {'name': './for_xx/trial6/frames/epoch5.png', 'path': './for_xx/trial6/frames/epoch5.png'},
    {'name': './for_xx/trial6/frames/epoch6.png', 'path': './for_xx/trial6/frames/epoch6.png'},
    {'name': './for_xx/trial6/frames/epoch7.png', 'path': './for_xx/trial6/frames/epoch7.png'},
    {'name': './for_xx/trial202/frames/epoch0.png', 'path': './for_xx/trial202/frames/epoch0.png'},
    {'name': './for_xx/trial202/frames/epoch1.png', 'path': './for_xx/trial202/frames/epoch1.png'},
    {'name': './for_xx/trial202/frames/epoch2.png', 'path': './for_xx/trial202/frames/epoch2.png'},
    {'name': './for_xx/trial202/frames/epoch3.png', 'path': './for_xx/trial202/frames/epoch3.png'},
    {'name': './for_xx/trial202/frames/epoch4.png', 'path': './for_xx/trial202/frames/epoch4.png'},
    {'name': './for_xx/trial202/frames/epoch5.png', 'path': './for_xx/trial202/frames/epoch5.png'},
    {'name': './for_xx/trial202/frames/epoch6.png', 'path': './for_xx/trial202/frames/epoch6.png'},
    {'name': './for_xx/trial202/frames/epoch7.png', 'path': './for_xx/trial202/frames/epoch7.png'},
    {'name': './for_xx/trial205/frames/epoch0.png', 'path': './for_xx/trial205/frames/epoch0.png'},
    {'name': './for_xx/trial205/frames/epoch1.png', 'path': './for_xx/trial205/frames/epoch1.png'},
    {'name': './for_xx/trial205/frames/epoch2.png', 'path': './for_xx/trial205/frames/epoch2.png'},
    {'name': './for_xx/trial205/frames/epoch3.png', 'path': './for_xx/trial205/frames/epoch3.png'},
    {'name': './for_xx/trial205/frames/epoch4.png', 'path': './for_xx/trial205/frames/epoch4.png'},
    {'name': './for_xx/trial205/frames/epoch5.png', 'path': './for_xx/trial205/frames/epoch5.png'},
    {'name': './for_xx/trial205/frames/epoch6.png', 'path': './for_xx/trial205/frames/epoch6.png'},
    {'name': './for_xx/trial205/frames/epoch7.png', 'path': './for_xx/trial205/frames/epoch7.png'},
    {'name': './for_xx/trial1/frames/epoch0.png', 'path': './for_xx/trial1/frames/epoch0.png'},
    {'name': './for_xx/trial1/frames/epoch1.png', 'path': './for_xx/trial1/frames/epoch1.png'},
    {'name': './for_xx/trial1/frames/epoch2.png', 'path': './for_xx/trial1/frames/epoch2.png'},
    {'name': './for_xx/trial1/frames/epoch3.png', 'path': './for_xx/trial1/frames/epoch3.png'},
    {'name': './for_xx/trial1/frames/epoch4.png', 'path': './for_xx/trial1/frames/epoch4.png'},
    {'name': './for_xx/trial1/frames/epoch5.png', 'path': './for_xx/trial1/frames/epoch5.png'},
    {'name': './for_xx/trial1/frames/epoch6.png', 'path': './for_xx/trial1/frames/epoch6.png'},
    {'name': './for_xx/trial8/frames/epoch0.png', 'path': './for_xx/trial8/frames/epoch0.png'},
    {'name': './for_xx/trial8/frames/epoch1.png', 'path': './for_xx/trial8/frames/epoch1.png'},
    {'name': './for_xx/trial8/frames/epoch2.png', 'path': './for_xx/trial8/frames/epoch2.png'},
    {'name': './for_xx/trial8/frames/epoch3.png', 'path': './for_xx/trial8/frames/epoch3.png'},
    {'name': './for_xx/trial8/frames/epoch4.png', 'path': './for_xx/trial8/frames/epoch4.png'},
    {'name': './for_xx/trial8/frames/epoch5.png', 'path': './for_xx/trial8/frames/epoch5.png'},
    {'name': './for_xx/trial8/frames/epoch6.png', 'path': './for_xx/trial8/frames/epoch6.png'},
    {'name': './for_xx/trial315/frames/epoch0.png', 'path': './for_xx/trial315/frames/epoch0.png'},
    {'name': './for_xx/trial315/frames/epoch1.png', 'path': './for_xx/trial315/frames/epoch1.png'},
    {'name': './for_xx/trial315/frames/epoch2.png', 'path': './for_xx/trial315/frames/epoch2.png'},
    {'name': './for_xx/trial315/frames/epoch3.png', 'path': './for_xx/trial315/frames/epoch3.png'},
    {'name': './for_xx/trial315/frames/epoch4.png', 'path': './for_xx/trial315/frames/epoch4.png'},
    {'name': './for_xx/trial315/frames/epoch5.png', 'path': './for_xx/trial315/frames/epoch5.png'},
    {'name': './for_xx/trial315/frames/epoch6.png', 'path': './for_xx/trial315/frames/epoch6.png'},
    {'name': './for_xx/trial315/frames/epoch7.png', 'path': './for_xx/trial315/frames/epoch7.png'},
    {'name': './for_xx/trial312/frames/epoch0.png', 'path': './for_xx/trial312/frames/epoch0.png'},
    {'name': './for_xx/trial312/frames/epoch1.png', 'path': './for_xx/trial312/frames/epoch1.png'},
    {'name': './for_xx/trial312/frames/epoch2.png', 'path': './for_xx/trial312/frames/epoch2.png'},
    {'name': './for_xx/trial312/frames/epoch3.png', 'path': './for_xx/trial312/frames/epoch3.png'},
    {'name': './for_xx/trial312/frames/epoch4.png', 'path': './for_xx/trial312/frames/epoch4.png'},
    {'name': './for_xx/trial312/frames/epoch5.png', 'path': './for_xx/trial312/frames/epoch5.png'},
    {'name': './for_xx/trial312/frames/epoch6.png', 'path': './for_xx/trial312/frames/epoch6.png'},
    {'name': './for_xx/trial312/frames/epoch7.png', 'path': './for_xx/trial312/frames/epoch7.png'},
    {'name': './for_xx/trial313/frames/epoch0.png', 'path': './for_xx/trial313/frames/epoch0.png'},
    {'name': './for_xx/trial313/frames/epoch1.png', 'path': './for_xx/trial313/frames/epoch1.png'},
    {'name': './for_xx/trial313/frames/epoch2.png', 'path': './for_xx/trial313/frames/epoch2.png'},
    {'name': './for_xx/trial313/frames/epoch3.png', 'path': './for_xx/trial313/frames/epoch3.png'},
    {'name': './for_xx/trial313/frames/epoch4.png', 'path': './for_xx/trial313/frames/epoch4.png'},
    {'name': './for_xx/trial313/frames/epoch5.png', 'path': './for_xx/trial313/frames/epoch5.png'},
    {'name': './for_xx/trial313/frames/epoch6.png', 'path': './for_xx/trial313/frames/epoch6.png'},
    {'name': './for_xx/trial313/frames/epoch7.png', 'path': './for_xx/trial313/frames/epoch7.png'},
    {'name': './for_xx/trial314/frames/epoch0.png', 'path': './for_xx/trial314/frames/epoch0.png'},
    {'name': './for_xx/trial314/frames/epoch1.png', 'path': './for_xx/trial314/frames/epoch1.png'},
    {'name': './for_xx/trial314/frames/epoch2.png', 'path': './for_xx/trial314/frames/epoch2.png'},
    {'name': './for_xx/trial314/frames/epoch3.png', 'path': './for_xx/trial314/frames/epoch3.png'},
    {'name': './for_xx/trial314/frames/epoch4.png', 'path': './for_xx/trial314/frames/epoch4.png'},
    {'name': './for_xx/trial314/frames/epoch5.png', 'path': './for_xx/trial314/frames/epoch5.png'},
    {'name': './for_xx/trial314/frames/epoch6.png', 'path': './for_xx/trial314/frames/epoch6.png'},
    {'name': './for_xx/trial314/frames/epoch7.png', 'path': './for_xx/trial314/frames/epoch7.png'},
    {'name': './for_xx/trial307/frames/epoch0.png', 'path': './for_xx/trial307/frames/epoch0.png'},
    {'name': './for_xx/trial307/frames/epoch1.png', 'path': './for_xx/trial307/frames/epoch1.png'},
    {'name': './for_xx/trial307/frames/epoch2.png', 'path': './for_xx/trial307/frames/epoch2.png'},
    {'name': './for_xx/trial307/frames/epoch3.png', 'path': './for_xx/trial307/frames/epoch3.png'},
    {'name': './for_xx/trial307/frames/epoch4.png', 'path': './for_xx/trial307/frames/epoch4.png'},
    {'name': './for_xx/trial307/frames/epoch5.png', 'path': './for_xx/trial307/frames/epoch5.png'},
    {'name': './for_xx/trial307/frames/epoch6.png', 'path': './for_xx/trial307/frames/epoch6.png'},
    {'name': './for_xx/trial307/frames/epoch7.png', 'path': './for_xx/trial307/frames/epoch7.png'},
    {'name': './for_xx/trial300/frames/epoch0.png', 'path': './for_xx/trial300/frames/epoch0.png'},
    {'name': './for_xx/trial300/frames/epoch1.png', 'path': './for_xx/trial300/frames/epoch1.png'},
    {'name': './for_xx/trial300/frames/epoch2.png', 'path': './for_xx/trial300/frames/epoch2.png'},
    {'name': './for_xx/trial300/frames/epoch3.png', 'path': './for_xx/trial300/frames/epoch3.png'},
    {'name': './for_xx/trial300/frames/epoch4.png', 'path': './for_xx/trial300/frames/epoch4.png'},
    {'name': './for_xx/trial300/frames/epoch5.png', 'path': './for_xx/trial300/frames/epoch5.png'},
    {'name': './for_xx/trial300/frames/epoch6.png', 'path': './for_xx/trial300/frames/epoch6.png'},
    {'name': './for_xx/trial300/frames/epoch7.png', 'path': './for_xx/trial300/frames/epoch7.png'},
    {'name': './for_xx/trial309/frames/epoch0.png', 'path': './for_xx/trial309/frames/epoch0.png'},
    {'name': './for_xx/trial309/frames/epoch1.png', 'path': './for_xx/trial309/frames/epoch1.png'},
    {'name': './for_xx/trial309/frames/epoch2.png', 'path': './for_xx/trial309/frames/epoch2.png'},
    {'name': './for_xx/trial309/frames/epoch3.png', 'path': './for_xx/trial309/frames/epoch3.png'},
    {'name': './for_xx/trial309/frames/epoch4.png', 'path': './for_xx/trial309/frames/epoch4.png'},
    {'name': './for_xx/trial309/frames/epoch5.png', 'path': './for_xx/trial309/frames/epoch5.png'},
    {'name': './for_xx/trial309/frames/epoch6.png', 'path': './for_xx/trial309/frames/epoch6.png'},
    {'name': './for_xx/trial309/frames/epoch7.png', 'path': './for_xx/trial309/frames/epoch7.png'},
    {'name': './for_xx/trial104/frames/epoch0.png', 'path': './for_xx/trial104/frames/epoch0.png'},
    {'name': './for_xx/trial104/frames/epoch1.png', 'path': './for_xx/trial104/frames/epoch1.png'},
    {'name': './for_xx/trial104/frames/epoch2.png', 'path': './for_xx/trial104/frames/epoch2.png'},
    {'name': './for_xx/trial104/frames/epoch3.png', 'path': './for_xx/trial104/frames/epoch3.png'},
    {'name': './for_xx/trial104/frames/epoch4.png', 'path': './for_xx/trial104/frames/epoch4.png'},
    {'name': './for_xx/trial104/frames/epoch5.png', 'path': './for_xx/trial104/frames/epoch5.png'},
    {'name': './for_xx/trial104/frames/epoch6.png', 'path': './for_xx/trial104/frames/epoch6.png'},
    {'name': './for_xx/trial104/frames/epoch7.png', 'path': './for_xx/trial104/frames/epoch7.png'},
    {'name': './for_xx/trial103/frames/epoch0.png', 'path': './for_xx/trial103/frames/epoch0.png'},
    {'name': './for_xx/trial103/frames/epoch1.png', 'path': './for_xx/trial103/frames/epoch1.png'},
    {'name': './for_xx/trial103/frames/epoch2.png', 'path': './for_xx/trial103/frames/epoch2.png'},
    {'name': './for_xx/trial103/frames/epoch3.png', 'path': './for_xx/trial103/frames/epoch3.png'},
    {'name': './for_xx/trial103/frames/epoch4.png', 'path': './for_xx/trial103/frames/epoch4.png'},
    {'name': './for_xx/trial103/frames/epoch5.png', 'path': './for_xx/trial103/frames/epoch5.png'},
    {'name': './for_xx/trial103/frames/epoch6.png', 'path': './for_xx/trial103/frames/epoch6.png'},
    {'name': './for_xx/trial103/frames/epoch7.png', 'path': './for_xx/trial103/frames/epoch7.png'},
    {'name': './for_xx/trial102/frames/epoch0.png', 'path': './for_xx/trial102/frames/epoch0.png'},
    {'name': './for_xx/trial102/frames/epoch1.png', 'path': './for_xx/trial102/frames/epoch1.png'},
    {'name': './for_xx/trial102/frames/epoch2.png', 'path': './for_xx/trial102/frames/epoch2.png'},
    {'name': './for_xx/trial102/frames/epoch3.png', 'path': './for_xx/trial102/frames/epoch3.png'},
    {'name': './for_xx/trial102/frames/epoch4.png', 'path': './for_xx/trial102/frames/epoch4.png'},
    {'name': './for_xx/trial102/frames/epoch5.png', 'path': './for_xx/trial102/frames/epoch5.png'},
    {'name': './for_xx/trial102/frames/epoch6.png', 'path': './for_xx/trial102/frames/epoch6.png'},
    {'name': './for_xx/trial308/frames/epoch0.png', 'path': './for_xx/trial308/frames/epoch0.png'},
    {'name': './for_xx/trial308/frames/epoch1.png', 'path': './for_xx/trial308/frames/epoch1.png'},
    {'name': './for_xx/trial308/frames/epoch2.png', 'path': './for_xx/trial308/frames/epoch2.png'},
    {'name': './for_xx/trial308/frames/epoch3.png', 'path': './for_xx/trial308/frames/epoch3.png'},
    {'name': './for_xx/trial308/frames/epoch4.png', 'path': './for_xx/trial308/frames/epoch4.png'},
    {'name': './for_xx/trial308/frames/epoch5.png', 'path': './for_xx/trial308/frames/epoch5.png'},
    {'name': './for_xx/trial308/frames/epoch6.png', 'path': './for_xx/trial308/frames/epoch6.png'},
    {'name': './for_xx/trial105/frames/epoch0.png', 'path': './for_xx/trial105/frames/epoch0.png'},
    {'name': './for_xx/trial105/frames/epoch1.png', 'path': './for_xx/trial105/frames/epoch1.png'},
    {'name': './for_xx/trial105/frames/epoch2.png', 'path': './for_xx/trial105/frames/epoch2.png'},
    {'name': './for_xx/trial105/frames/epoch3.png', 'path': './for_xx/trial105/frames/epoch3.png'},
    {'name': './for_xx/trial105/frames/epoch4.png', 'path': './for_xx/trial105/frames/epoch4.png'},
    {'name': './for_xx/trial105/frames/epoch5.png', 'path': './for_xx/trial105/frames/epoch5.png'},
    {'name': './for_xx/trial105/frames/epoch6.png', 'path': './for_xx/trial105/frames/epoch6.png'},
    {'name': './for_xx/trial105/frames/epoch7.png', 'path': './for_xx/trial105/frames/epoch7.png'},
    {'name': './for_xx/trial301/frames/epoch0.png', 'path': './for_xx/trial301/frames/epoch0.png'},
    {'name': './for_xx/trial301/frames/epoch1.png', 'path': './for_xx/trial301/frames/epoch1.png'},
    {'name': './for_xx/trial301/frames/epoch2.png', 'path': './for_xx/trial301/frames/epoch2.png'},
    {'name': './for_xx/trial301/frames/epoch3.png', 'path': './for_xx/trial301/frames/epoch3.png'},
    {'name': './for_xx/trial301/frames/epoch4.png', 'path': './for_xx/trial301/frames/epoch4.png'},
    {'name': './for_xx/trial301/frames/epoch5.png', 'path': './for_xx/trial301/frames/epoch5.png'},
    {'name': './for_xx/trial301/frames/epoch6.png', 'path': './for_xx/trial301/frames/epoch6.png'},
    {'name': './for_xx/trial301/frames/epoch7.png', 'path': './for_xx/trial301/frames/epoch7.png'},
    {'name': './for_xx/trial306/frames/epoch0.png', 'path': './for_xx/trial306/frames/epoch0.png'},
    {'name': './for_xx/trial306/frames/epoch1.png', 'path': './for_xx/trial306/frames/epoch1.png'},
    {'name': './for_xx/trial306/frames/epoch2.png', 'path': './for_xx/trial306/frames/epoch2.png'},
    {'name': './for_xx/trial306/frames/epoch3.png', 'path': './for_xx/trial306/frames/epoch3.png'},
    {'name': './for_xx/trial306/frames/epoch4.png', 'path': './for_xx/trial306/frames/epoch4.png'},
    {'name': './for_xx/trial306/frames/epoch5.png', 'path': './for_xx/trial306/frames/epoch5.png'},
    {'name': './for_xx/trial306/frames/epoch6.png', 'path': './for_xx/trial306/frames/epoch6.png'},
    {'name': './for_xx/trial306/frames/epoch7.png', 'path': './for_xx/trial306/frames/epoch7.png'},
    {'name': './for_xx/trial209/frames/epoch0.png', 'path': './for_xx/trial209/frames/epoch0.png'},
    {'name': './for_xx/trial209/frames/epoch1.png', 'path': './for_xx/trial209/frames/epoch1.png'},
    {'name': './for_xx/trial209/frames/epoch2.png', 'path': './for_xx/trial209/frames/epoch2.png'},
    {'name': './for_xx/trial209/frames/epoch3.png', 'path': './for_xx/trial209/frames/epoch3.png'},
    {'name': './for_xx/trial209/frames/epoch4.png', 'path': './for_xx/trial209/frames/epoch4.png'},
    {'name': './for_xx/trial209/frames/epoch5.png', 'path': './for_xx/trial209/frames/epoch5.png'},
    {'name': './for_xx/trial209/frames/epoch6.png', 'path': './for_xx/trial209/frames/epoch6.png'},
    {'name': './for_xx/trial209/frames/epoch7.png', 'path': './for_xx/trial209/frames/epoch7.png'},
    {'name': './for_xx/trial4/frames/epoch0.png', 'path': './for_xx/trial4/frames/epoch0.png'},
    {'name': './for_xx/trial4/frames/epoch1.png', 'path': './for_xx/trial4/frames/epoch1.png'},
    {'name': './for_xx/trial4/frames/epoch2.png', 'path': './for_xx/trial4/frames/epoch2.png'},
    {'name': './for_xx/trial4/frames/epoch3.png', 'path': './for_xx/trial4/frames/epoch3.png'},
    {'name': './for_xx/trial4/frames/epoch4.png', 'path': './for_xx/trial4/frames/epoch4.png'},
    {'name': './for_xx/trial4/frames/epoch5.png', 'path': './for_xx/trial4/frames/epoch5.png'},
    {'name': './for_xx/trial4/frames/epoch6.png', 'path': './for_xx/trial4/frames/epoch6.png'},
    {'name': './for_xx/trial200/frames/epoch0.png', 'path': './for_xx/trial200/frames/epoch0.png'},
    {'name': './for_xx/trial200/frames/epoch1.png', 'path': './for_xx/trial200/frames/epoch1.png'},
    {'name': './for_xx/trial200/frames/epoch2.png', 'path': './for_xx/trial200/frames/epoch2.png'},
    {'name': './for_xx/trial200/frames/epoch3.png', 'path': './for_xx/trial200/frames/epoch3.png'},
    {'name': './for_xx/trial200/frames/epoch4.png', 'path': './for_xx/trial200/frames/epoch4.png'},
    {'name': './for_xx/trial200/frames/epoch5.png', 'path': './for_xx/trial200/frames/epoch5.png'},
    {'name': './for_xx/trial200/frames/epoch6.png', 'path': './for_xx/trial200/frames/epoch6.png'},
    {'name': './for_xx/trial200/frames/epoch7.png', 'path': './for_xx/trial200/frames/epoch7.png'},
    {'name': './for_xx/trial207/frames/epoch0.png', 'path': './for_xx/trial207/frames/epoch0.png'},
    {'name': './for_xx/trial207/frames/epoch1.png', 'path': './for_xx/trial207/frames/epoch1.png'},
    {'name': './for_xx/trial207/frames/epoch2.png', 'path': './for_xx/trial207/frames/epoch2.png'},
    {'name': './for_xx/trial207/frames/epoch3.png', 'path': './for_xx/trial207/frames/epoch3.png'},
    {'name': './for_xx/trial207/frames/epoch4.png', 'path': './for_xx/trial207/frames/epoch4.png'},
    {'name': './for_xx/trial207/frames/epoch5.png', 'path': './for_xx/trial207/frames/epoch5.png'},
    {'name': './for_xx/trial207/frames/epoch6.png', 'path': './for_xx/trial207/frames/epoch6.png'},
    {'name': './for_xx/trial207/frames/epoch7.png', 'path': './for_xx/trial207/frames/epoch7.png'},
    {'name': './for_xx/trial3/frames/epoch0.png', 'path': './for_xx/trial3/frames/epoch0.png'},
    {'name': './for_xx/trial3/frames/epoch1.png', 'path': './for_xx/trial3/frames/epoch1.png'},
    {'name': './for_xx/trial3/frames/epoch2.png', 'path': './for_xx/trial3/frames/epoch2.png'},
    {'name': './for_xx/trial3/frames/epoch3.png', 'path': './for_xx/trial3/frames/epoch3.png'},
    {'name': './for_xx/trial3/frames/epoch4.png', 'path': './for_xx/trial3/frames/epoch4.png'},
    {'name': './for_xx/trial3/frames/epoch5.png', 'path': './for_xx/trial3/frames/epoch5.png'},
    {'name': './for_xx/trial3/frames/epoch6.png', 'path': './for_xx/trial3/frames/epoch6.png'},
    {'name': './for_xx/trial3/frames/epoch7.png', 'path': './for_xx/trial3/frames/epoch7.png'},
    {'name': './for_xx/trial206/frames/epoch0.png', 'path': './for_xx/trial206/frames/epoch0.png'},
    {'name': './for_xx/trial206/frames/epoch1.png', 'path': './for_xx/trial206/frames/epoch1.png'},
    {'name': './for_xx/trial206/frames/epoch2.png', 'path': './for_xx/trial206/frames/epoch2.png'},
    {'name': './for_xx/trial206/frames/epoch3.png', 'path': './for_xx/trial206/frames/epoch3.png'},
    {'name': './for_xx/trial206/frames/epoch4.png', 'path': './for_xx/trial206/frames/epoch4.png'},
    {'name': './for_xx/trial206/frames/epoch5.png', 'path': './for_xx/trial206/frames/epoch5.png'},
    {'name': './for_xx/trial206/frames/epoch6.png', 'path': './for_xx/trial206/frames/epoch6.png'},
    {'name': './for_xx/trial206/frames/epoch7.png', 'path': './for_xx/trial206/frames/epoch7.png'},
    {'name': './for_xx/trial2/frames/epoch0.png', 'path': './for_xx/trial2/frames/epoch0.png'},
    {'name': './for_xx/trial2/frames/epoch1.png', 'path': './for_xx/trial2/frames/epoch1.png'},
    {'name': './for_xx/trial2/frames/epoch2.png', 'path': './for_xx/trial2/frames/epoch2.png'},
    {'name': './for_xx/trial2/frames/epoch3.png', 'path': './for_xx/trial2/frames/epoch3.png'},
    {'name': './for_xx/trial2/frames/epoch4.png', 'path': './for_xx/trial2/frames/epoch4.png'},
    {'name': './for_xx/trial2/frames/epoch5.png', 'path': './for_xx/trial2/frames/epoch5.png'},
    {'name': './for_xx/trial2/frames/epoch6.png', 'path': './for_xx/trial2/frames/epoch6.png'},
    {'name': './for_xx/trial5/frames/epoch0.png', 'path': './for_xx/trial5/frames/epoch0.png'},
    {'name': './for_xx/trial5/frames/epoch1.png', 'path': './for_xx/trial5/frames/epoch1.png'},
    {'name': './for_xx/trial5/frames/epoch2.png', 'path': './for_xx/trial5/frames/epoch2.png'},
    {'name': './for_xx/trial5/frames/epoch3.png', 'path': './for_xx/trial5/frames/epoch3.png'},
    {'name': './for_xx/trial5/frames/epoch4.png', 'path': './for_xx/trial5/frames/epoch4.png'},
    {'name': './for_xx/trial5/frames/epoch5.png', 'path': './for_xx/trial5/frames/epoch5.png'},
    {'name': './for_xx/trial5/frames/epoch6.png', 'path': './for_xx/trial5/frames/epoch6.png'},
    {'name': './for_xx/trial201/frames/epoch0.png', 'path': './for_xx/trial201/frames/epoch0.png'},
    {'name': './for_xx/trial201/frames/epoch1.png', 'path': './for_xx/trial201/frames/epoch1.png'},
    {'name': './for_xx/trial201/frames/epoch2.png', 'path': './for_xx/trial201/frames/epoch2.png'},
    {'name': './for_xx/trial201/frames/epoch3.png', 'path': './for_xx/trial201/frames/epoch3.png'},
    {'name': './for_xx/trial201/frames/epoch4.png', 'path': './for_xx/trial201/frames/epoch4.png'},
    {'name': './for_xx/trial201/frames/epoch5.png', 'path': './for_xx/trial201/frames/epoch5.png'},
    {'name': './for_xx/trial201/frames/epoch6.png', 'path': './for_xx/trial201/frames/epoch6.png'},
    {'name': './for_xx/trial201/frames/epoch7.png', 'path': './for_xx/trial201/frames/epoch7.png'},
    {'name': './for_xx/trial208/frames/epoch0.png', 'path': './for_xx/trial208/frames/epoch0.png'},
    {'name': './for_xx/trial208/frames/epoch1.png', 'path': './for_xx/trial208/frames/epoch1.png'},
    {'name': './for_xx/trial208/frames/epoch2.png', 'path': './for_xx/trial208/frames/epoch2.png'},
    {'name': './for_xx/trial208/frames/epoch3.png', 'path': './for_xx/trial208/frames/epoch3.png'},
    {'name': './for_xx/trial208/frames/epoch4.png', 'path': './for_xx/trial208/frames/epoch4.png'},
    {'name': './for_xx/trial208/frames/epoch5.png', 'path': './for_xx/trial208/frames/epoch5.png'},
    {'name': './for_xx/trial208/frames/epoch6.png', 'path': './for_xx/trial208/frames/epoch6.png'},
    {'name': './for_xx/trial208/frames/epoch7.png', 'path': './for_xx/trial208/frames/epoch7.png'},
    {'name': './for_xx/trial318/frames/epoch0.png', 'path': './for_xx/trial318/frames/epoch0.png'},
    {'name': './for_xx/trial318/frames/epoch1.png', 'path': './for_xx/trial318/frames/epoch1.png'},
    {'name': './for_xx/trial318/frames/epoch2.png', 'path': './for_xx/trial318/frames/epoch2.png'},
    {'name': './for_xx/trial318/frames/epoch3.png', 'path': './for_xx/trial318/frames/epoch3.png'},
    {'name': './for_xx/trial318/frames/epoch4.png', 'path': './for_xx/trial318/frames/epoch4.png'},
    {'name': './for_xx/trial318/frames/epoch5.png', 'path': './for_xx/trial318/frames/epoch5.png'},
    {'name': './for_xx/trial318/frames/epoch6.png', 'path': './for_xx/trial318/frames/epoch6.png'},
    {'name': './for_xx/trial311/frames/epoch0.png', 'path': './for_xx/trial311/frames/epoch0.png'},
    {'name': './for_xx/trial311/frames/epoch1.png', 'path': './for_xx/trial311/frames/epoch1.png'},
    {'name': './for_xx/trial311/frames/epoch2.png', 'path': './for_xx/trial311/frames/epoch2.png'},
    {'name': './for_xx/trial311/frames/epoch3.png', 'path': './for_xx/trial311/frames/epoch3.png'},
    {'name': './for_xx/trial311/frames/epoch4.png', 'path': './for_xx/trial311/frames/epoch4.png'},
    {'name': './for_xx/trial311/frames/epoch5.png', 'path': './for_xx/trial311/frames/epoch5.png'},
    {'name': './for_xx/trial311/frames/epoch6.png', 'path': './for_xx/trial311/frames/epoch6.png'},
    {'name': './for_xx/trial311/frames/epoch7.png', 'path': './for_xx/trial311/frames/epoch7.png'},
    {'name': './for_xx/trial316/frames/epoch0.png', 'path': './for_xx/trial316/frames/epoch0.png'},
    {'name': './for_xx/trial316/frames/epoch1.png', 'path': './for_xx/trial316/frames/epoch1.png'},
    {'name': './for_xx/trial316/frames/epoch2.png', 'path': './for_xx/trial316/frames/epoch2.png'},
    {'name': './for_xx/trial316/frames/epoch3.png', 'path': './for_xx/trial316/frames/epoch3.png'},
    {'name': './for_xx/trial316/frames/epoch4.png', 'path': './for_xx/trial316/frames/epoch4.png'},
    {'name': './for_xx/trial316/frames/epoch5.png', 'path': './for_xx/trial316/frames/epoch5.png'},
    {'name': './for_xx/trial316/frames/epoch6.png', 'path': './for_xx/trial316/frames/epoch6.png'},
    {'name': './for_xx/trial316/frames/epoch7.png', 'path': './for_xx/trial316/frames/epoch7.png'},
    {'name': './for_xx/trial317/frames/epoch0.png', 'path': './for_xx/trial317/frames/epoch0.png'},
    {'name': './for_xx/trial317/frames/epoch1.png', 'path': './for_xx/trial317/frames/epoch1.png'},
    {'name': './for_xx/trial317/frames/epoch2.png', 'path': './for_xx/trial317/frames/epoch2.png'},
    {'name': './for_xx/trial317/frames/epoch3.png', 'path': './for_xx/trial317/frames/epoch3.png'},
    {'name': './for_xx/trial317/frames/epoch4.png', 'path': './for_xx/trial317/frames/epoch4.png'},
    {'name': './for_xx/trial317/frames/epoch5.png', 'path': './for_xx/trial317/frames/epoch5.png'},
    {'name': './for_xx/trial317/frames/epoch6.png', 'path': './for_xx/trial317/frames/epoch6.png'},
    {'name': './for_xx/trial317/frames/epoch7.png', 'path': './for_xx/trial317/frames/epoch7.png'},
    {'name': './for_xx/trial310/frames/epoch0.png', 'path': './for_xx/trial310/frames/epoch0.png'},
    {'name': './for_xx/trial310/frames/epoch1.png', 'path': './for_xx/trial310/frames/epoch1.png'},
    {'name': './for_xx/trial310/frames/epoch2.png', 'path': './for_xx/trial310/frames/epoch2.png'},
    {'name': './for_xx/trial310/frames/epoch3.png', 'path': './for_xx/trial310/frames/epoch3.png'},
    {'name': './for_xx/trial310/frames/epoch4.png', 'path': './for_xx/trial310/frames/epoch4.png'},
    {'name': './for_xx/trial310/frames/epoch5.png', 'path': './for_xx/trial310/frames/epoch5.png'},
    {'name': './for_xx/trial310/frames/epoch6.png', 'path': './for_xx/trial310/frames/epoch6.png'},
    {'name': './for_xx/trial310/frames/epoch7.png', 'path': './for_xx/trial310/frames/epoch7.png'},
    {'name': './for_xx/trial319/frames/epoch0.png', 'path': './for_xx/trial319/frames/epoch0.png'},
    {'name': './for_xx/trial319/frames/epoch1.png', 'path': './for_xx/trial319/frames/epoch1.png'},
    {'name': './for_xx/trial319/frames/epoch2.png', 'path': './for_xx/trial319/frames/epoch2.png'},
    {'name': './for_xx/trial319/frames/epoch3.png', 'path': './for_xx/trial319/frames/epoch3.png'},
    {'name': './for_xx/trial319/frames/epoch4.png', 'path': './for_xx/trial319/frames/epoch4.png'},
    {'name': './for_xx/trial319/frames/epoch5.png', 'path': './for_xx/trial319/frames/epoch5.png'},
    {'name': './for_xx/trial319/frames/epoch6.png', 'path': './for_xx/trial319/frames/epoch6.png'},
    {'name': './for_xx/trial319/frames/epoch7.png', 'path': './for_xx/trial319/frames/epoch7.png'},
    {'name': './for_xx/trial303/frames/epoch0.png', 'path': './for_xx/trial303/frames/epoch0.png'},
    {'name': './for_xx/trial303/frames/epoch1.png', 'path': './for_xx/trial303/frames/epoch1.png'},
    {'name': './for_xx/trial303/frames/epoch2.png', 'path': './for_xx/trial303/frames/epoch2.png'},
    {'name': './for_xx/trial303/frames/epoch3.png', 'path': './for_xx/trial303/frames/epoch3.png'},
    {'name': './for_xx/trial303/frames/epoch4.png', 'path': './for_xx/trial303/frames/epoch4.png'},
    {'name': './for_xx/trial303/frames/epoch5.png', 'path': './for_xx/trial303/frames/epoch5.png'},
    {'name': './for_xx/trial303/frames/epoch6.png', 'path': './for_xx/trial303/frames/epoch6.png'},
    {'name': './for_xx/trial303/frames/epoch7.png', 'path': './for_xx/trial303/frames/epoch7.png'},
    {'name': './for_xx/trial109/frames/epoch0.png', 'path': './for_xx/trial109/frames/epoch0.png'},
    {'name': './for_xx/trial109/frames/epoch1.png', 'path': './for_xx/trial109/frames/epoch1.png'},
    {'name': './for_xx/trial109/frames/epoch2.png', 'path': './for_xx/trial109/frames/epoch2.png'},
    {'name': './for_xx/trial109/frames/epoch3.png', 'path': './for_xx/trial109/frames/epoch3.png'},
    {'name': './for_xx/trial109/frames/epoch4.png', 'path': './for_xx/trial109/frames/epoch4.png'},
    {'name': './for_xx/trial109/frames/epoch5.png', 'path': './for_xx/trial109/frames/epoch5.png'},
    {'name': './for_xx/trial109/frames/epoch6.png', 'path': './for_xx/trial109/frames/epoch6.png'},
    {'name': './for_xx/trial109/frames/epoch7.png', 'path': './for_xx/trial109/frames/epoch7.png'},
    {'name': './for_xx/trial304/frames/epoch0.png', 'path': './for_xx/trial304/frames/epoch0.png'},
    {'name': './for_xx/trial304/frames/epoch1.png', 'path': './for_xx/trial304/frames/epoch1.png'},
    {'name': './for_xx/trial304/frames/epoch2.png', 'path': './for_xx/trial304/frames/epoch2.png'},
    {'name': './for_xx/trial304/frames/epoch3.png', 'path': './for_xx/trial304/frames/epoch3.png'},
    {'name': './for_xx/trial304/frames/epoch4.png', 'path': './for_xx/trial304/frames/epoch4.png'},
    {'name': './for_xx/trial304/frames/epoch5.png', 'path': './for_xx/trial304/frames/epoch5.png'},
    {'name': './for_xx/trial304/frames/epoch6.png', 'path': './for_xx/trial304/frames/epoch6.png'},
    {'name': './for_xx/trial304/frames/epoch7.png', 'path': './for_xx/trial304/frames/epoch7.png'},
    {'name': './for_xx/trial100/frames/epoch0.png', 'path': './for_xx/trial100/frames/epoch0.png'},
    {'name': './for_xx/trial100/frames/epoch1.png', 'path': './for_xx/trial100/frames/epoch1.png'},
    {'name': './for_xx/trial100/frames/epoch2.png', 'path': './for_xx/trial100/frames/epoch2.png'},
    {'name': './for_xx/trial100/frames/epoch3.png', 'path': './for_xx/trial100/frames/epoch3.png'},
    {'name': './for_xx/trial100/frames/epoch4.png', 'path': './for_xx/trial100/frames/epoch4.png'},
    {'name': './for_xx/trial100/frames/epoch5.png', 'path': './for_xx/trial100/frames/epoch5.png'},
    {'name': './for_xx/trial107/frames/epoch0.png', 'path': './for_xx/trial107/frames/epoch0.png'},
    {'name': './for_xx/trial107/frames/epoch1.png', 'path': './for_xx/trial107/frames/epoch1.png'},
    {'name': './for_xx/trial107/frames/epoch2.png', 'path': './for_xx/trial107/frames/epoch2.png'},
    {'name': './for_xx/trial107/frames/epoch3.png', 'path': './for_xx/trial107/frames/epoch3.png'},
    {'name': './for_xx/trial107/frames/epoch4.png', 'path': './for_xx/trial107/frames/epoch4.png'},
    {'name': './for_xx/trial107/frames/epoch5.png', 'path': './for_xx/trial107/frames/epoch5.png'},
    {'name': './for_xx/trial107/frames/epoch6.png', 'path': './for_xx/trial107/frames/epoch6.png'},
    {'name': './for_xx/trial107/frames/epoch7.png', 'path': './for_xx/trial107/frames/epoch7.png'},
    {'name': './for_xx/trial106/frames/epoch0.png', 'path': './for_xx/trial106/frames/epoch0.png'},
    {'name': './for_xx/trial106/frames/epoch1.png', 'path': './for_xx/trial106/frames/epoch1.png'},
    {'name': './for_xx/trial106/frames/epoch2.png', 'path': './for_xx/trial106/frames/epoch2.png'},
    {'name': './for_xx/trial106/frames/epoch3.png', 'path': './for_xx/trial106/frames/epoch3.png'},
    {'name': './for_xx/trial106/frames/epoch4.png', 'path': './for_xx/trial106/frames/epoch4.png'},
    {'name': './for_xx/trial106/frames/epoch5.png', 'path': './for_xx/trial106/frames/epoch5.png'},
    {'name': './for_xx/trial106/frames/epoch6.png', 'path': './for_xx/trial106/frames/epoch6.png'},
    {'name': './for_xx/trial101/frames/epoch0.png', 'path': './for_xx/trial101/frames/epoch0.png'},
    {'name': './for_xx/trial101/frames/epoch1.png', 'path': './for_xx/trial101/frames/epoch1.png'},
    {'name': './for_xx/trial101/frames/epoch2.png', 'path': './for_xx/trial101/frames/epoch2.png'},
    {'name': './for_xx/trial101/frames/epoch3.png', 'path': './for_xx/trial101/frames/epoch3.png'},
    {'name': './for_xx/trial101/frames/epoch4.png', 'path': './for_xx/trial101/frames/epoch4.png'},
    {'name': './for_xx/trial101/frames/epoch5.png', 'path': './for_xx/trial101/frames/epoch5.png'},
    {'name': './for_xx/trial101/frames/epoch6.png', 'path': './for_xx/trial101/frames/epoch6.png'},
    {'name': './for_xx/trial101/frames/epoch7.png', 'path': './for_xx/trial101/frames/epoch7.png'},
    {'name': './for_xx/trial108/frames/epoch0.png', 'path': './for_xx/trial108/frames/epoch0.png'},
    {'name': './for_xx/trial108/frames/epoch1.png', 'path': './for_xx/trial108/frames/epoch1.png'},
    {'name': './for_xx/trial108/frames/epoch2.png', 'path': './for_xx/trial108/frames/epoch2.png'},
    {'name': './for_xx/trial108/frames/epoch3.png', 'path': './for_xx/trial108/frames/epoch3.png'},
    {'name': './for_xx/trial108/frames/epoch4.png', 'path': './for_xx/trial108/frames/epoch4.png'},
    {'name': './for_xx/trial108/frames/epoch5.png', 'path': './for_xx/trial108/frames/epoch5.png'},
    {'name': './for_xx/trial305/frames/epoch0.png', 'path': './for_xx/trial305/frames/epoch0.png'},
    {'name': './for_xx/trial305/frames/epoch1.png', 'path': './for_xx/trial305/frames/epoch1.png'},
    {'name': './for_xx/trial305/frames/epoch2.png', 'path': './for_xx/trial305/frames/epoch2.png'},
    {'name': './for_xx/trial305/frames/epoch3.png', 'path': './for_xx/trial305/frames/epoch3.png'},
    {'name': './for_xx/trial305/frames/epoch4.png', 'path': './for_xx/trial305/frames/epoch4.png'},
    {'name': './for_xx/trial305/frames/epoch5.png', 'path': './for_xx/trial305/frames/epoch5.png'},
    {'name': './for_xx/trial305/frames/epoch6.png', 'path': './for_xx/trial305/frames/epoch6.png'},
    {'name': './for_xx/trial305/frames/epoch7.png', 'path': './for_xx/trial305/frames/epoch7.png'},
    {'name': './for_xx/trial302/frames/epoch0.png', 'path': './for_xx/trial302/frames/epoch0.png'},
    {'name': './for_xx/trial302/frames/epoch1.png', 'path': './for_xx/trial302/frames/epoch1.png'},
    {'name': './for_xx/trial302/frames/epoch2.png', 'path': './for_xx/trial302/frames/epoch2.png'},
    {'name': './for_xx/trial302/frames/epoch3.png', 'path': './for_xx/trial302/frames/epoch3.png'},
    {'name': './for_xx/trial302/frames/epoch4.png', 'path': './for_xx/trial302/frames/epoch4.png'},
    {'name': './for_xx/trial302/frames/epoch5.png', 'path': './for_xx/trial302/frames/epoch5.png'},
    {'name': './for_xx/trial302/frames/epoch6.png', 'path': './for_xx/trial302/frames/epoch6.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var new_trialClock;
var text_2;
var key_resp;
var trialClock;
var continue_from_intro;
var text;
var text_3;
var frame0_2Clock;
var text_4;
var text_5;
var key_resp_2;
var image0_1;
var image0_2;
var image0_3;
var image0_4;
var image0_5;
var image0_6;
var image0_7;
var image0;
var endingClock;
var text_10;
var key_resp_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "new_trial"
  new_trialClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'New Trial!\nPress Space to start',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  continue_from_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Press Space button to start!\nThe Instruction will stay on the screen\nRead the images from left to right, from top to bottom (the usual order that meets your reading habbit)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "frame0_2"
  frame0_2Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'press Space to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image0_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image0_1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.11), 0.21], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image0_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image0_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.11, 0.21], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image0_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image0_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.32, 0.21], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  image0_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image0_4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.32), (- 0.05)], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image0_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image0_5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.11), (- 0.05)], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  image0_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image0_6', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.11, (- 0.05)], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  image0_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image0_7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.32, (- 0.05)], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  image0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image0', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.32), 0.21], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  // Initialize components for Routine "ending"
  endingClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Please Respond by pressing y or n!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var new_trialComponents;
function new_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'new_trial' ---
    t = 0;
    new_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('new_trial.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    new_trialComponents = [];
    new_trialComponents.push(text_2);
    new_trialComponents.push(key_resp);
    
    new_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function new_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'new_trial' ---
    // get current time
    t = new_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    new_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function new_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'new_trial' ---
    new_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('new_trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "new_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_medium.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(frame0_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(frame0_2RoutineEachFrame());
      trialsLoopScheduler.add(frame0_2RoutineEnd(snapshot));
      trialsLoopScheduler.add(endingRoutineBegin(snapshot));
      trialsLoopScheduler.add(endingRoutineEachFrame());
      trialsLoopScheduler.add(endingRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _continue_from_intro_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    continue_from_intro.keys = undefined;
    continue_from_intro.rt = undefined;
    _continue_from_intro_allKeys = [];
    text.setText(instruction);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(continue_from_intro);
    trialComponents.push(text);
    trialComponents.push(text_3);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *continue_from_intro* updates
    if (t >= 0.0 && continue_from_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_from_intro.tStart = t;  // (not accounting for frame time here)
      continue_from_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continue_from_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continue_from_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continue_from_intro.clearEvents(); });
    }
    
    if (continue_from_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = continue_from_intro.getKeys({keyList: ['space'], waitRelease: false});
      _continue_from_intro_allKeys = _continue_from_intro_allKeys.concat(theseKeys);
      if (_continue_from_intro_allKeys.length > 0) {
        continue_from_intro.keys = _continue_from_intro_allKeys[_continue_from_intro_allKeys.length - 1].name;  // just the last key pressed
        continue_from_intro.rt = _continue_from_intro_allKeys[_continue_from_intro_allKeys.length - 1].rt;
        continue_from_intro.duration = _continue_from_intro_allKeys[_continue_from_intro_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(continue_from_intro.corr, level);
    }
    psychoJS.experiment.addData('continue_from_intro.keys', continue_from_intro.keys);
    if (typeof continue_from_intro.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continue_from_intro.rt', continue_from_intro.rt);
        psychoJS.experiment.addData('continue_from_intro.duration', continue_from_intro.duration);
        routineTimer.reset();
        }
    
    continue_from_intro.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var frame0_2Components;
function frame0_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'frame0_2' ---
    t = 0;
    frame0_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('frame0_2.started', globalClock.getTime());
    text_4.setText(instruction);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    image0_1.setImage(frame1);
    image0_2.setImage(frame2);
    image0_3.setImage(frame3);
    image0_4.setImage(frame4);
    image0_5.setImage(frame5);
    image0_6.setImage(frame6);
    image0_7.setImage(frame7);
    image0.setImage(frame0);
    // keep track of which components have finished
    frame0_2Components = [];
    frame0_2Components.push(text_4);
    frame0_2Components.push(text_5);
    frame0_2Components.push(key_resp_2);
    frame0_2Components.push(image0_1);
    frame0_2Components.push(image0_2);
    frame0_2Components.push(image0_3);
    frame0_2Components.push(image0_4);
    frame0_2Components.push(image0_5);
    frame0_2Components.push(image0_6);
    frame0_2Components.push(image0_7);
    frame0_2Components.push(image0);
    
    frame0_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function frame0_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'frame0_2' ---
    // get current time
    t = frame0_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image0_1* updates
    if (t >= 0.0 && image0_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image0_1.tStart = t;  // (not accounting for frame time here)
      image0_1.frameNStart = frameN;  // exact frame index
      
      image0_1.setAutoDraw(true);
    }
    
    
    // *image0_2* updates
    if (t >= 0.0 && image0_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image0_2.tStart = t;  // (not accounting for frame time here)
      image0_2.frameNStart = frameN;  // exact frame index
      
      image0_2.setAutoDraw(true);
    }
    
    
    // *image0_3* updates
    if (t >= 0.0 && image0_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image0_3.tStart = t;  // (not accounting for frame time here)
      image0_3.frameNStart = frameN;  // exact frame index
      
      image0_3.setAutoDraw(true);
    }
    
    
    // *image0_4* updates
    if (t >= 0.0 && image0_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image0_4.tStart = t;  // (not accounting for frame time here)
      image0_4.frameNStart = frameN;  // exact frame index
      
      image0_4.setAutoDraw(true);
    }
    
    
    // *image0_5* updates
    if (t >= 0.0 && image0_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image0_5.tStart = t;  // (not accounting for frame time here)
      image0_5.frameNStart = frameN;  // exact frame index
      
      image0_5.setAutoDraw(true);
    }
    
    
    // *image0_6* updates
    if (t >= 0.0 && image0_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image0_6.tStart = t;  // (not accounting for frame time here)
      image0_6.frameNStart = frameN;  // exact frame index
      
      image0_6.setAutoDraw(true);
    }
    
    
    // *image0_7* updates
    if (t >= 0.0 && image0_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image0_7.tStart = t;  // (not accounting for frame time here)
      image0_7.frameNStart = frameN;  // exact frame index
      
      image0_7.setAutoDraw(true);
    }
    
    
    // *image0* updates
    if (t >= 0.0 && image0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image0.tStart = t;  // (not accounting for frame time here)
      image0.frameNStart = frameN;  // exact frame index
      
      image0.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    frame0_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function frame0_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'frame0_2' ---
    frame0_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('frame0_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "frame0_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var endingComponents;
function endingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ending' ---
    t = 0;
    endingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ending.started', globalClock.getTime());
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    endingComponents = [];
    endingComponents.push(text_10);
    endingComponents.push(key_resp_5);
    
    endingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ending' ---
    // get current time
    t = endingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ending' ---
    endingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ending.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "ending" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
