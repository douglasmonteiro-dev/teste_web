/**
 * Serviço de dados de ramais.
 * @namespace app.admin
 */
(function () {
    'use strict';

    angular
        .module('app.admin')
        .service('generalClientService', generalClientService);

    generalClientService.$inject = ['requestJsonService', 'cacheService', '$q'];

    /** @ngInject */
    /**
     * @namespace generalClientService
     * @desc Application Angular branchGroup
     * @memberOf admin
     */
    function generalClientService(requestJsonService, cacheService, $q) {
        return {
            getListClientGeneralByClientId: getListClientGeneralByClientId,
            addNewClientGeneral: addNewClientGeneral,
            updateClientGeneral: updateClientGeneral,
            removeClientGeneral: removeClientGeneral,

        };

        /**
         * Obter lista de Grupos de uma conta de cliente.
         */
        function getListClientGeneralByClientId(_client_id) {
            var promise_deferred = $q.defer();
            var cache_setting = cacheService.get('app_settings');
            var cache_app = cacheService.get('application');
            var cache_user = cacheService.get('user');
            var cache_client = cacheService.get('client');
            var url = cache_setting.api.base;
            var method = cache_setting.api.admin.client.trunk.get_trunk_list;
            var headers = [
                {key: 'app_identifier', 'value': cache_app.identifier},
                {key: 'client_logged', 'value': cache_client._id,},
                {key: 'user_logged', 'value': cache_user._id},
                {key: 'token', 'value': cache_user.token},
            ];
            var params = [
                _client_id
            ];
            requestJsonService.get(url, method, params, headers, function (result) {
                promise_deferred.resolve(result);
            });
            return promise_deferred.promise;
        }

        /**
         * Cadastra novo grupo na conta de um cliente.
         * @param _client_id
         * @param _model
         * @returns {Promise}
         */
        function addNewClientGeneral(_client_id, _model) {
            var promise_deferred = $q.defer();
            var cache_setting = cacheService.get('app_settings');
            var cache_app = cacheService.get('application');
            var cache_user = cacheService.get('user');
            var cache_client = cacheService.get('client');
            var url = cache_setting.api.base;
            var method = cache_setting.api.admin.client.trunk.post_add_trunk;
            var headers = [
                {key: 'app_identifier', 'value': cache_app.identifier},
                {key: 'client_logged', 'value': cache_client._id,},
                {key: 'user_logged', 'value': cache_user._id},
                {key: 'token', 'value': cache_user.token},
            ];
            var params = {
                client_id: _client_id,
                trunk: _model,
            };
            requestJsonService.post(url, method, params, headers, function (result) {
                promise_deferred.resolve(result);
            });
            return promise_deferred.promise;
        }


        /**
         * @desc service de atualização de dados de grupo
         */
        function updateClientGeneral(_client_id, _trunk) {
            var promise_deferred = $q.defer();
            var cache_setting = cacheService.get('app_settings');
            var cache_app = cacheService.get('application');
            var cache_user = cacheService.get('user');
            var cache_client = cacheService.get('client');
            var url = cache_setting.api.base;
            var method = cache_setting.api.admin.client.trunk.put_update_trunk;
            var headers = [
                {key: 'app_identifier', 'value': cache_app.identifier},
                {key: 'client_logged', 'value': cache_client._id,},
                {key: 'user_logged', 'value': cache_user._id},
                {key: 'token', 'value': cache_user.token},
            ];
            var params = {
                client_id: _client_id,
                trunk: _trunk,
            };

            requestJsonService.put(url, method, params, headers, function (result) {
                promise_deferred.resolve(result);
            });
            return promise_deferred.promise;
        }


        /**
         * @desc service de remoção de grupo
         */
        function removeClientGeneral(_client_id, _trunk) {
            var promise_deferred = $q.defer();
            var cache_setting = cacheService.get('app_settings');
            var cache_app = cacheService.get('application');
            var cache_user = cacheService.get('user');
            var cache_client = cacheService.get('client');
            var url = cache_setting.api.base;
            var method = cache_setting.api.admin.client.trunk.delete_remove_trunk;
            var headers = [
                {key: 'app_identifier', 'value': cache_app.identifier},
                {key: 'client_logged', 'value': cache_client._id,},
                {key: 'user_logged', 'value': cache_user._id},
                {key: 'token', 'value': cache_user.token},
            ];
            var params = [
                _client_id,
                _trunk,
            ]

            requestJsonService.delete(url, method, params, headers, function (result) {
                promise_deferred.resolve(result);
            });
            return promise_deferred.promise;
        }

        /**
         * Obter lista de comandos de uma conta de cliente.
         */
        function getListClientCommandsByClientId(_client_id) {
            var promise_deferred = $q.defer();
            var cache_setting = cacheService.get('app_settings');
            var cache_app = cacheService.get('application');
            var cache_user = cacheService.get('user');
            var cache_client = cacheService.get('client');
            var url = cache_setting.api.base;
            var method = cache_setting.api.admin.client.trunk.get_trunk_list;
            var headers = [
                {key: 'app_identifier', 'value': cache_app.identifier},
                {key: 'client_logged', 'value': cache_client._id,},
                {key: 'user_logged', 'value': cache_user._id},
                {key: 'token', 'value': cache_user.token},
            ];
            var params = [
                _client_id
            ];
            requestJsonService.get(url, method, params, headers, function (result) {
                promise_deferred.resolve(result);
            });
            return promise_deferred.promise;
        }
        /**
         * Obter lista de followMe de uma conta de cliente.
         */
        function getListClientFollowMeByClientId(_client_id) {
            var promise_deferred = $q.defer();
            var cache_setting = cacheService.get('app_settings');
            var cache_app = cacheService.get('application');
            var cache_user = cacheService.get('user');
            var cache_client = cacheService.get('client');
            var url = cache_setting.api.base;
            var method = cache_setting.api.admin.client.trunk.get_trunk_list;
            var headers = [
                {key: 'app_identifier', 'value': cache_app.identifier},
                {key: 'client_logged', 'value': cache_client._id,},
                {key: 'user_logged', 'value': cache_user._id},
                {key: 'token', 'value': cache_user.token},
            ];
            var params = [
                _client_id
            ];
            requestJsonService.get(url, method, params, headers, function (result) {
                promise_deferred.resolve(result);
            });
            return promise_deferred.promise;
        }
    }
})();


