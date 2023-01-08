//  Auth
export { register } from "./auth/register";
export { refreshToken } from "./auth/refreshToken";
export { login } from "./auth/login";
export { logout } from "./auth/logout";

// My profile
export { getProfile } from "./profile/getProfile";
export { addProfile } from "./profile/addProfile";
export { addExperience } from "./profile/addExperience";
export { addEducation } from "./profile/addEducation";
export { deleteExperience } from "./profile/deleteExperience";
export { deleteEducation } from "./profile/deleteEducation";
export { deleteAccount } from "./profile/deleteAccount";
export { updateAvatar } from "./profile/updateAvatar";
export { getAvatarById } from "./profile/getAvatarById";

// User's profiles
export { getAllProfiles } from "./profile/getAllProfiles";
export { getProfileById } from "./profile/getProfileById";
export { getGitRepos } from "./profile/getGitRepos";

// Posts
export { getPosts } from "./post/getPosts";
export { likePost } from "./post/likePost";
export { unlikePost } from "./post/unlikePost";
export { deletePost } from "./post/deletePost";
export { addPost } from "./post/addPost";
export { getPost } from "./post/getPost";

// Comments
export { addComment } from "./post/addComment";
export { deleteComment } from "./post/deleteComment";
