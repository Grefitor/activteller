import Shepherd from 'node_modules/shepherd.js';

const converToTourObject = (obj: any) => {
  return obj as Shepherd.Tour;
};

const multilineMessage = (message: string[]) => {
    let div = document.createElement('p')
    div.classList.add('tour-message-wrapper');
    message.forEach((ele, i) => {
        const p = document.createElement('p')
        p.classList.add(`message-${i}`)
        p.innerText = ele;
        div.appendChild(p)
    })
    return div
}

export const STEPS_BUTTONS = {
  skip: {
    classes: 'skip-button',
    secondary: true,
    text: 'skip',
    action: function () {
      converToTourObject(this).hide();
    },
  },
  cancel: {
    classes: 'cancel-button',
    text: 'Cancel',
    secondary: true,
    action: function () {
      converToTourObject(this).cancel();
    },
  },
  next: {
    classes: 'next-button',
    text: 'Next',
    action: function () {
      converToTourObject(this).next();
    },
  },
  done: {
    classes: 'complete-button',
    text: 'Complete',
    action: function () {
      converToTourObject(this).complete();
    },
  },
  restart: {
    classes: 'restart-button',
    text: 'Restart',
    secondary: true,
    action: function () {
      converToTourObject(this).complete();
      converToTourObject(this).start();
    },
  },
};

export const defaultStepOptions: Shepherd.Step.StepOptions = {
  scrollTo: true,
  arrow: false,
  cancelIcon: {
    enabled: false,
  },
  canClickTarget: true,
  popperOptions: {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 20],
        },
      },
    ],
  },
  modalOverlayOpeningPadding: 11,
  modalOverlayOpeningRadius: 4,
};

export const boardTourSteps: Array<Shepherd.Step.StepOptions> = [
  {
    id: 'intro',
    attachTo: {
      element: 'text.main',
      on: 'bottom',
    },
    arrow: false,
    text: `Welcome to the Activteller`,
    buttons: [STEPS_BUTTONS['next']],
    when: {},
  },
  {
    id: 'add_player',
    attachTo: {
      element: '#add-player-btn',
      on: 'left',
    },
    arrow: false,
    text: () => multilineMessage([`Click on the Add Participant!`,`Fill the form to create a Pariticpant.`]),
    advanceOn: {
      event: 'click',
      selector: '.submit-btn',
    },
  },
  {
    id: 'playerlist',
    attachTo: {
      element: '#participant',
      on: 'right',
    },
    arrow: false,
    text: () => multilineMessage([`Congratulation!`,` You have successfully created a participants.`]),
    buttons: [STEPS_BUTTONS['next']],
  },

  {
    id: 'fetch-activity-btn',
    attachTo: {
      element: '#fetch-activity-btn',
      on: 'right',
    },
    arrow: false,
    text: () => multilineMessage([`Click! on the button`,`I will find an Activity for you!`]),
    advanceOn: {
      event: 'click',
      selector: '#fetch-activity-btn',
    },
  },
  {
    id: 'activity',
    attachTo: {
      element: '#activity',
      on: 'left',
    },
    arrow: false,
    text: () => multilineMessage([`Here's an Activity you can do.`, `Thanks!`]),
    buttons: [STEPS_BUTTONS['restart'], STEPS_BUTTONS['done']],
  },
];


