import assert from 'assert';
import * as dimescheduler from '../../dist/esm';

var uri = 'uri';
var user = 'user';
var pw = 'pw';

describe('Authentication', function () {
    describe('#authenticate()', function () {
        it('Should authenticate', async () => {
            try {
                var authenticator = new dimescheduler.UrlEncodedFormsAuthenticator(uri, user, pw);
                var authResult = await authenticator.authenticate();

                const token = authResult.data.access_token;
                assert.ok(token != null);
            }
            catch (err) {
                console.log(err);
                assert.fail();
            }
        });
    });
});