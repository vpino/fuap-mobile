import {createMachine, assign} from 'xstate';

export const onboardingMachine = createMachine({
  id: 'onboarding',
  initial: 'loadNames',
  context: {
    loadNames: {firstName: '', lastName: ''},
    document: {country: '', typeDocument: '', dni: ''},
    address: {address: '', state: '', city: '', town: ''},
    housing: {type: '', year: '', month: ''},
    education: {level: '', area: '', year: ''},
    occupation: {occupation: '', typeBusiness: ''},
    company: {
      name: '',
      phone: '',
      address: '',
      state: '',
      city: '',
      year: '',
      month: '',
    },
    contactInfo: {phone: ''},
  },
  states: {
    loadNames: {
      on: {
        NEXT: {
          target: 'document',
          actions: assign((context: any, event: any) => ({
            loadNames: {
              firstName:
                event?.data?.name?.firstName ?? context?.name?.firstName,
              lastName: event?.data?.name?.lastName ?? context?.name?.lastName,
            },
          })),
        },
      },
    },
    document: {
      on: {
        NEXT: {
          target: 'address',
          actions: assign((context: any, event: any) => ({
            document: {
              country:
                event?.data?.document?.country ?? context?.document?.country,
              typeDocument:
                event?.data?.document?.typeDocument ??
                context?.document?.typeDocument,
              dni: event?.data?.document?.dni ?? context?.document?.dni,
            },
          })),
        },
        PREVIOUS: 'loadNames',
      },
    },
    address: {
      on: {
        NEXT: {
          target: 'housing',
          actions: assign((context: any, event: any) => ({
            address: {
              address:
                event?.data?.address?.address ?? context?.address?.address,
              state: event?.data?.address?.state ?? context?.address?.state,
              city: event?.data?.address?.city ?? context?.address?.city,
              town: event?.data?.address?.town ?? context?.address?.town,
            },
          })),
        },
        PREVIOUS: 'document',
      },
    },
    housing: {
      on: {
        NEXT: {
          target: 'education',
          actions: assign((context: any, event: any) => ({
            housing: {
              type: event?.data?.housing?.type ?? context?.housing?.type,
              year: event?.data?.housing?.year ?? context?.housing?.year,
              month: event?.data?.housing?.month ?? context?.housing?.month,
            },
          })),
        },
        PREVIOUS: 'address',
      },
    },
    education: {
      on: {
        NEXT: {
          target: 'occupation',
          actions: assign((context: any, event: any) => ({
            education: {
              level: event?.data?.education?.level ?? context?.education?.level,
              area: event?.data?.education?.area ?? context?.education?.area,
              year: event?.data?.education?.year ?? context?.education?.year,
            },
          })),
        },
        PREVIOUS: 'housing',
      },
    },
    occupation: {
      on: {
        NEXT: {
          target: 'company',
          actions: assign((context: any, event: any) => ({
            occupation: {
              occupation:
                event?.data?.occupation?.occupation ??
                context?.occupation?.occupation,
              typeBusiness:
                event?.data?.occupation?.typeBusiness ??
                context?.occupation?.typeBusiness,
            },
          })),
        },
        PREVIOUS: 'education',
      },
    },
    company: {
      on: {
        NEXT: {
          target: 'contactInfo',
          actions: assign((context: any, event: any) => ({
            company: {
              name: event?.data?.company?.name ?? context?.company?.name,
              phone: event?.data?.company?.phone ?? context?.company?.phone,
              address:
                event?.data?.company?.address ?? context?.company?.address,
              state: event?.data?.company?.state ?? context?.company?.state,
              city: event?.data?.company?.city ?? context?.company?.city,
              year: event?.data?.company?.year ?? context?.company?.year,
              month: event?.data?.company?.month ?? context?.company?.month,
            },
          })),
        },
        PREVIOUS: 'occupation',
      },
    },
    contactInfo: {
      on: {
        NEXT: {
          target: 'complete',
          actions: assign((context: any, event: any) => ({
            contactInfo: {
              phone:
                event?.data?.contactInfo?.phone ?? context?.contactInfo?.phone,
            },
          })),
        },
        PREVIOUS: 'company',
        SUBMIT: 'complete',
      },
    },
    complete: {
      type: 'final',
    },
  },
});
