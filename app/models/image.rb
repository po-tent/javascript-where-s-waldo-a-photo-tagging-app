class Image < ApplicationRecord
  has_many :characters
  has_many :scores, -> { order seconds: :asc}
end
