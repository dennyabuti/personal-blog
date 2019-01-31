import { fetchPosts } from '../../../src/actions/post';
import { FETCH_POSTS} from '../../../src/constants/post';

describe('Wordpress post Actions', () => {
    it('Should return a poyload of 2 posts and an action type', () => {
        const posts = [{id: 1, content: '<p> hello </p>'}, {id: 2, content: '<p>world</p>'}];
        const fetchPostsAction = fetchPosts(posts);
        expect(fetchPostsAction).toBeTruthy();
        expect(fetchPostsAction).toMatchObject({type: FETCH_POSTS, payload: posts});
    });
});
