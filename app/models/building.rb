# frozen_string_literal: true

class Building < ApplicationRecord
  belongs_to :organization
  has_many :units, dependent: :destroy

  validates :name, presence: true
  validates :address, presence: true

  rhino_owner :organization
  rhino_references [ :organization ]
end
