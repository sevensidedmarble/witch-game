module ApplicationHelper
  def avatar_url(user)
    url = "https://robohash.org/#{user.username}"
  end
end
