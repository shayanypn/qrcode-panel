
export interface IUser {
  id: string
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  company: string,
  country: string,
  city: string
  street: string
  zipcode: string,
  website: string
  account_type: string,
  created_at: string
}

export interface IPlan {
  scan: string,
  scan_max: string,
  dynamic_code: string,
  dynamic_code_max: string,
  static_code: string,
  static_code_max: string,
  user: string,
  user_max: string
}