export const formatPrice = (price: number): string =>
    new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
  
  export const formatDate = (dateString: string): string =>
    new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  export const formatSquareFeet = (sqft: number): string => `${sqft.toLocaleString()} sq ft`;
  
  export const getTimeSinceListing = (dateString: string): string => {
    const listingDate = new Date(dateString);
    const diffDays = Math.ceil((Date.now() - listingDate.getTime()) / 86400000);
    if (diffDays <= 1) return '1 day ago';
    if (diffDays < 30) return `${diffDays} days ago`;
    const months = Math.floor(diffDays / 30);
    if (months <= 1) return '1 month ago';
    if (months < 12) return `${months} months ago`;
    const years = Math.floor(months / 12);
    return years <= 1 ? '1 year ago' : `${years} years ago`;
  };
  
  export const getPropertyTypeColor = (type: string): string => {
    const map: Record<string, string> = {
      House: 'bg-blue-100 text-blue-800',
      Condo: 'bg-purple-100 text-purple-800',
      Townhouse: 'bg-green-100 text-green-800',
      Apartment: 'bg-yellow-100 text-yellow-800',
      Estate: 'bg-red-100 text-red-800',
      Cabin: 'bg-amber-100 text-amber-800',
      Cottage: 'bg-emerald-100 text-emerald-800',
      Land: 'bg-gray-100 text-gray-800'
    };
    return map[type] ?? 'bg-gray-100 text-gray-800';
  };
  
  export const getBedroomsText = (n: number) => (n === 0 ? 'Studio' : n === 1 ? '1 Bedroom' : `${n} Bedrooms`);
  export const getBathroomsText = (n: number) => (Number.isInteger(n) ? (n === 1 ? '1 Bathroom' : `${n} Bathrooms`) : `${n} Bathrooms`);
  