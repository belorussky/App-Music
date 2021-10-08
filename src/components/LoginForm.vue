<template>
  <div class="text-white text-center font-bold p-4 mb-4"
       v-if="login_show_alert" :class="login_alert_variant">
    {{ login_alert_msg }}
  </div>
  <vee-form :validation-schema="loginSchema"
            @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field type="email" name="email"
                 class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                 :placeholder="placeholder_email" />
      <ErrorMessage class="text-red-600" name="email"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">{{ $t('login.password') }}</label>
      <vee-field type="password" name="password"
                 class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                 :placeholder="placeholder_password" />
      <ErrorMessage class="text-red-600" name="password"/>
    </div>
    <button type="submit" :disabled="login_in_submission"
            class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700">
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:3|max:100',
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-blue-500',
      login_alert_msg: this.$t('login.wait'),
      placeholder_email: this.$t('login.enter_email'),
      placeholder_password: this.$t('login.password'),
    };
  },
  methods: {
    async login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = 'bg-blue-500';
      this.login_alert_msg = this.$t('login.wait');

      try {
        await this.$store.dispatch('login', values);
      } catch (e) {
        this.login_in_submission = false;
        this.login_alert_variant = 'bg-red-500';
        this.login_alert_msg = this.$t('login.invalid');
        return;
      }

      this.login_alert_variant = 'bg-green-500';
      this.login_alert_msg = this.$t('login.success');
      window.location.reload();
    },
  },
};
</script>
