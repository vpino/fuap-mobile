import {createMachine, assign} from 'xstate';

export const onboardingMachine = createMachine({
  id: 'onboarding',
  initial: 'loadNames',
  context: {
    loadNames: {firstName: '', lastName: ''},
    document: {country: '', typeDocument: '', dni: ''},
    address: {address: '', state: '', city: '', town: ''},
    housingData: {type: '', year: '', month: ''},
    educationData: {level: '', area: '', year: ''},
    occupation: {occupation: '', typeBusiness: ''},
    companyData: {
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
          target: 'housingData',
          actions: assign((context: any, event: any) => ({
            address: {
              address: event?.data?.address?.address ?? context.address.address,
              state: event?.data?.address?.state ?? context.address.state,
              city: event?.data?.address?.city ?? context.address.city,
              town: event?.data?.address?.town ?? context.address.town,
            },
          })),
        },
        PREVIOUS: 'document',
      },
    },
    housingData: {
      on: {
        NEXT: {
          target: 'educationData',
          actions: assign((context: any, event: any) => ({
            housingData: {
              type: event?.data?.housingData?.type ?? context.housingData.type,
              year: event?.data?.housingData?.year ?? context.housingData.year,
              month:
                event?.data?.housingData?.month ?? context.housingData.month,
            },
          })),
        },
        PREVIOUS: 'address',
      },
    },
    educationData: {
      on: {
        NEXT: {
          target: 'occupation',
          actions: assign((context: any, event: any) => ({
            educationData: {
              level:
                event?.data?.educationData?.level ??
                context.educationData.level,
              area:
                event?.data?.educationData?.area ?? context.educationData.area,
              year:
                event?.data?.educationData?.year ?? context.educationData.year,
            },
          })),
        },
        PREVIOUS: 'housingData',
      },
    },
    occupation: {
      on: {
        NEXT: {
          target: 'companyData',
          actions: assign((context: any, event: any) => ({
            occupation: {
              occupation:
                event?.data?.occupation?.occupation ??
                context.occupation.occupation,
              typeBusiness:
                event?.data?.occupation?.typeBusiness ??
                context.occupation.typeBusiness,
            },
          })),
        },
        PREVIOUS: 'educationData',
      },
    },
    companyData: {
      on: {
        NEXT: {
          target: 'contactInfo',
          actions: assign((context: any, event: any) => ({
            companyData: {
              name: event?.data?.companyData?.name ?? context.companyData.name,
              phone:
                event?.data?.companyData?.phone ?? context.companyData.phone,
              address:
                event?.data?.companyData?.address ??
                context.companyData.address,
              state:
                event?.data?.companyData?.state ?? context.companyData.state,
              city: event?.data?.companyData?.city ?? context.companyData.city,
              year: event?.data?.companyData?.year ?? context.companyData.year,
              month:
                event?.data?.companyData?.month ?? context.companyData.month,
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
                event?.data?.contactInfo?.phone ?? context.contactInfo.phone,
            },
          })),
        },
        PREVIOUS: 'companyData',
        SUBMIT: 'complete',
      },
    },
    complete: {
      type: 'final',
    },
  },
});
