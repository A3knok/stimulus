require "test_helper"

class DemosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get demos_index_url
    assert_response :success
  end

  test "should get modal" do
    get demos_modal_url
    assert_response :success
  end

  test "should get select" do
    get demos_select_url
    assert_response :success
  end
end
