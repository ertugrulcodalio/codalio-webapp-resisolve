# frozen_string_literal: true

class MaintenanceRequest < ApplicationRecord
  belongs_to :tenant_profile
  belongs_to :unit
  belongs_to :service_category
  belongs_to :technician_profile, optional: true
  belongs_to :organization

  has_many :maintenance_comments, dependent: :destroy

  attribute :status, :integer
  enum :status, { pending: 0, in_progress: 1, resolved: 2, closed: 3 }

  attribute :severity, :integer
  enum :severity, { low: 0, medium: 1, high: 2, emergency: 3 }

  validates :title, presence: true
  validates :description, presence: true
  validates :status, presence: true
  validates :severity, presence: true

  rhino_owner :organization
  rhino_references [ :tenant_profile, :unit, :service_category, :technician_profile, :organization ]
end
