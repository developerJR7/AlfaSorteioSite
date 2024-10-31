export type campaignsType = {
  created: string
  description: string
  image: string
  name: string
}

export type StateCampaignsType = {
  step: number
  campaign_name: string
  campaign_description: string
  campaign_call: string
  support_phone: string
  support_email: string
  mask_phone: string
  mask_email: string
  total_quotas: string
  quota_value: string
  quota_min: string
  quota_max: string
  quota_time: string
  location: string
  status: string
  image_base64: string | Blob | null
  name_file_userimg: string
  pdf_base64: string | Blob | null
  name_file_userpdf: string
  date_percent: string
  affiliate_percent: string
  promote_date: boolean
  promote_rule: boolean
  promote_affiliate: boolean
  draw_date: string
  prize: string
  second_prize: string
  third_prize: string
}
