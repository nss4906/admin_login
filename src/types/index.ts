export type UserRole = 'user' | 'admin';

export type PlanTier = 'FREE' | 'STARTER' | 'PRO' | 'BUSINESS';

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface PlanConfig {
  id: PlanTier;
  name: string;
  description: string;
  monthly_price: number;
  monthly_credits: number;
  max_resolution: string;
  ai_quality: 'Fast' | 'Standard' | 'Premium';
  pack_access: string[];
  storage_limit_gb: number;
  campaign_access: boolean;
  priority_generation: boolean;
}

export interface CreditBalance {
  user_id: string;
  available_credits: number;
  total_earned: number;
  total_spent: number;
  updated_at: string;
}

export interface CreditTransaction {
  id: string;
  user_id: string;
  amount: number;
  type: 'grant' | 'deduction' | 'refund' | 'subscription_refill';
  description: string;
  created_at: string;
}

export type GarmentCategory =
  | 'T-shirt'
  | 'Shirt'
  | 'Hoodie'
  | 'Sweatshirt'
  | 'Jacket'
  | 'Coat'
  | 'Pants'
  | 'Shorts'
  | 'Skirt'
  | 'Dress'
  | 'Tank top'
  | 'Polo'
  | 'Other';

export type GarmentOrientation = 'FRONT' | 'BACK' | 'SIDE' | 'DETAIL' | 'UNKNOWN';

export interface GarmentAnalysisResult {
  garment_category: GarmentCategory;
  orientation: GarmentOrientation;
  orientation_confidence: number;
  primary_color: string;
  secondary_colors: string[];
  graphic_detected: boolean;
  graphic_location?: 'Front Center' | 'Chest Logo' | 'Back Center' | 'Sleeve' | 'Multiple' | 'None';
  has_typography: boolean;
  has_logo: boolean;
  pattern: string;
  fit: 'Oversized' | 'Regular' | 'Slim' | 'Relaxed';
  sleeve_type: string;
  neck_type: string;
  fabric_appearance: string;
  reference_quality: 'Excellent' | 'Good' | 'Needs Better Image';
  quality_issues: string[];
}

export interface ModelAnalysisResult {
  people_count: number;
  face_visible: boolean;
  shot_type: 'Full Body' | 'Half Body' | 'Portrait';
  pose_detected: string;
  body_orientation: string;
  reference_quality: 'Excellent' | 'Good' | 'Limited';
  warnings: string[];
}

export interface GarmentReference {
  id: string;
  garment_id: string;
  image_url: string;
  orientation: GarmentOrientation;
  orientation_confidence: number;
  user_confirmed_orientation?: GarmentOrientation;
  analysis: GarmentAnalysisResult;
  created_at: string;
}

export interface GarmentItem {
  id: string;
  project_id: string;
  name: string;
  category: GarmentCategory;
  fit: string;
  color: string;
  references: GarmentReference[];
  created_at: string;
}

export interface ModelReference {
  id: string;
  project_id: string;
  image_url: string;
  name: string;
  analysis: ModelAnalysisResult;
  is_active: boolean;
  created_at: string;
}

export interface Project {
  id: string;
  user_id: string;
  name: string;
  thumbnail?: string;
  status: 'active' | 'archived';
  created_at: string;
  updated_at: string;
}

export type ProductPhotographyMode =
  | 'Clean E-commerce'
  | 'Premium E-commerce'
  | 'Marketplace'
  | 'Catalog'
  | 'Editorial';

export type ArtworkVisibility = 'Maximum' | 'Balanced' | 'Natural' | 'Lifestyle';

export type ColorAccuracyMode = 'Maximum Accuracy' | 'Balanced' | 'Creative';

export interface PhotoshootSettings {
  mode: ProductPhotographyMode;
  concept_name?: string;
  pose: string;
  expression: string;
  camera_angle: string;
  focal_length: string;
  aperture: string;
  lighting_style: string;
  lighting_direction: string;
  lighting_intensity: string;
  background_type: string;
  background_prompt?: string;
  fabric: string;
  garment_styling: string;
  model_styling: string;
  artwork_visibility: ArtworkVisibility;
  color_accuracy: ColorAccuracyMode;
  aspect_ratio: '1:1' | '4:5' | '9:16' | '16:9';
  custom_prompt?: string;
  garment_identity_lock: boolean;
  model_identity_lock: boolean;
  smart_garment_extraction: boolean;
}

export interface GenerationRequest {
  project_id: string;
  model_reference_id?: string;
  garment_id: string;
  settings: PhotoshootSettings;
  pack_type?: 'SINGLE' | 'ESSENTIAL' | 'PLUS' | 'DYNAMIC' | 'EDITORIAL' | 'SOCIAL' | 'COMPLETE';
  quality_tier: 'Fast' | 'Standard' | 'Premium';
}

export type GenerationJobStatus =
  | 'Queued'
  | 'Analyzing References'
  | 'Preparing Shoot'
  | 'Generating'
  | 'Quality Checking'
  | 'Saving'
  | 'Completed'
  | 'Failed';

export interface GenerationOutput {
  id: string;
  generation_job_id: string;
  image_url: string;
  aspect_ratio: string;
  shot_type: string;
  quality_review_status: 'Passed' | 'Needs Review';
  review_notes?: string[];
  created_at: string;
}

export interface GenerationJob {
  id: string;
  project_id: string;
  user_id: string;
  status: GenerationJobStatus;
  progress_percentage: number;
  credits_cost: number;
  request_payload: GenerationRequest;
  outputs: GenerationOutput[];
  error_message?: string;
  created_at: string;
  updated_at: string;
}

export interface SavedPreset {
  id: string;
  user_id: string;
  name: string;
  settings: PhotoshootSettings;
  created_at: string;
}

export interface Campaign {
  id: string;
  project_id: string;
  user_id: string;
  name: string;
  theme: string;
  settings: PhotoshootSettings;
  created_at: string;
}

export interface MockupAsset {
  id: string;
  user_id: string;
  project_id: string;
  source_image_url: string;
  mockup_template: string;
  rendered_image_url: string;
  created_at: string;
}

export interface AICostLog {
  id: string;
  user_id: string;
  generation_job_id: string;
  provider: string;
  model: string;
  images_generated: number;
  resolution: string;
  estimated_cost_usd: number;
  credits_deducted: number;
  duration_ms: number;
  status: 'success' | 'failure';
  created_at: string;
}
