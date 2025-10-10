export type AccountQuotation = {
  id: string;
  protocol: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  departureDate: string;
  returnDate: string | null;
  tripType: string;
  cabinClass: string | null;
  origin: {
    city: string;
    code: string | null;
    name: string;
  };
  destination: {
    city: string;
    code: string | null;
    name: string;
  };
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  totalPrice: number | null;
  responseNotes: string | null;
  validUntil: string | null;
  assignedTo: {
    name: string | null;
    email: string | null;
  } | null;
};