    <template>
  <div class="stuff flex flex-col items-center space-y-4">
    <div
      class="
        max-w-md
        mx-auto
        pamgray2
        shadow-md
        overflow-hidden
        w-full
        md:max-w-2xl
      "
    >
      <div class="md:flex w-full">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:w-48"
            src="https://i.imgur.com/iVoZILQh.jpg"
            alt="Weiner"
          />
        </div>
        <div class="p-8">
          <div
            class="uppercase tracking-wide text-sm text-red-500 font-semibold"
          >
            Vote for your favorite Waifu!
          </div>
          <p
            class="
              block
              mt-1
              text-lg
              leading-tight
              font-medium
              text-white
              hover:underline
            "
          >
            Select the best girl!
          </p>
          <p class="mt-2 text-gray-300">Select upto 10 waifus!</p>
        </div>
      </div>
    </div>
    <!--    <div id="container-bed640522658624db79a5a4634855709"></div>-->
    <div
      class="
        mx-auto
        pamgray
        text-white
        shadow-md
        overflow-hidden
        max-w-full
        md:max-w-2xl
      "
    >
      <hr
        style="
          height: 4px;
          border-width: 0;
          color: #ff00c3;
          background-color: #e3242b;
        "
      />
      <div class="p-8">
        Search:
        <input
          class="pamgray2 text-white border-red-500"
          type="text"
          v-model="filter"
        />
      </div>
      <div>
        <hr
          style="
            height: 4px;
            border-width: 0;
            color: #ff00c3;
            background-color: #e3242b;
          "
        />
        <div>
          <input type="hidden" name="type" value="female" />
          <input type="hidden" name="pollcontent" value="dummy" />

          <table class="flex flex-col items-center">
            <tbody class="w-full">
              <tr
                v-for="pollthing in poll.filter(
                  (x) =>
                    (x.name.toLowerCase().includes(filter.toLowerCase()) ||
                      x.anime.toLowerCase().includes(filter.toLowerCase())) &&
                    x.gender.toLowerCase() === 'female' &&
                    !x.picture.includes('apple') &&
                    !x.anime.toLowerCase().includes('https')
                )"
                :key="pollthing.name.split(', ').join('_')"
                class="h-48 w-full"
              >
                <td class="p-2">
                  <label class="supahpoll">
                    <input
                      type="checkbox"
                      :id="pollthing.name.split(', ').join('_')"
                      class="pollchoice"
                      name="pollcontent"
                      @click="(m) => checkClick(pollthing, m)"
                      :value="pollthing.name.split(', ').join('_')"
                      :disabled="
                        checks.length >= 10 &&
                        !checks.includes(pollthing.name.split(', ').join('_'))
                      "
                    /><span class="checkmark"></span>
                  </label>
                </td>
                <td class="px-2 py-8 md:px-8">
                  <div
                    class="
                      uppercase
                      tracking-wide
                      text-xs
                      md:text-sm
                      text-red-500
                      font-semibold
                    "
                  >
                    {{ pollthing.anime }}
                  </div>
                  <p
                    class="
                      block
                      mt-1
                      text-lg
                      leading-tight
                      font-medium
                      text-sm
                      md:text-base
                      text-white
                      hover:bold
                    "
                  >
                    {{ pollthing.name }}
                  </p>
                </td>

                <td>
                  <img
                    class="h-48 w-full object-cover w-96 md:w-48"
                    :src="pollthing.picture"
                    style="min-width: 100px"
                    :alt="pollthing.name"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <!--                  <div class="g-recaptcha border border-white bg-gray-600 text-white" data-callback = "calvack()"></div>-->
          <br />

          <button
            :disabled="checks.length < 1"
            @click="submit"
            class="
              border border-white
              p-4
              bg-red-500
              text-white
              rounded-md
              px-4
              py-2
              m-2
              transition
              duration-500
              ease
              select-none
              hover:bg-red-600
              focus:outline-none focus:shadow-outline
            "
            style="position: fixed; bottom: 0; right: 0"
          >
            Vote
          </button>
        </div>
        <hr
          style="
            height: 4px;
            border-width: 0;
            color: #ff00c3;
            background-color: #e3242b;
          "
        />
      </div>
      <hr
        style="
          height: 4px;
          border-width: 0;
          color: #ff00c3;
          background-color: #e3242b;
        "
      />
    </div>

    <div
      class="
        mx-auto
        pamgray2
        text-white
        shadow-md
        overflow-hidden
        w-full
        md:max-w-2xl
      "
    >
      <hr
        style="
          height: 4px;
          border-width: 0;
          color: #ff00c3;
          background-color: #e3242b;
        "
      />
      <div class="p-8">
        <h1>You have chosen the following:</h1>
      </div>

      <div
        class="
          max-w-md
          mx-auto
          bg-grayshit-400
          text-white
          shadow-md
          overflow-hidden
          md:max-w-2xl
        "
      >
        <hr
          style="
            height: 4px;
            border-width: 0;
            color: #ff00c3;
            background-color: #e3242b;
          "
        />
        <form>
          <center>
            <table class="w-full p-4">
              <tbody class="w-full">
                <tr
                  class="w-full"
                  v-for="pollthing in checks"
                  :key="pollthing.name.split(', ').join('_')"
                >
                  <td class="p-2">
                    <label class="supahpoll">
                      <input
                        type="checkbox"
                        :id="pollthing.name.split(', ').join('_')"
                        class="pollchoice"
                        name="pollcontent"
                        :value="pollthing.name.split(', ').join('_')"
                        @click="(m) => checkClick(pollthing, m)"
                        checked
                      /><span class="checkmark"></span>
                    </label>
                  </td>
                  <td class="px-2 py-8">
                    <div
                      class="
                        uppercase
                        tracking-wide
                        text-xs
                        md:text-sm
                        text-red-500
                        font-semibold
                      "
                    >
                      {{ pollthing.anime }}
                    </div>
                    <p
                      class="
                        block
                        mt-1
                        text-lg
                        leading-tight
                        font-medium
                        text-sm
                        md:text-base
                        text-white
                        hover:bold
                      "
                    >
                      {{ pollthing.name }}
                    </p>
                  </td>

                  <td>
                    <img
                      class="h-48 w-full object-cover w-96 md:w-48"
                      :src="pollthing.picture"
                      style="min-width: 100px"
                      :alt="pollthing.name"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </form>
      </div>
      <hr
        style="
          height: 4px;
          border-width: 0;
          color: #ff00c3;
          background-color: #e3242b;
        "
      />
    </div>
  </div>
</template>    
    
<script>
export default {
  head() {
    return {
      title: 'Annual Female Character Popularity Poll',
    }
  },
  async asyncData() {
    const pollstuff = await fetch(
      'https://beta.presidentanimememes.com/main/characters'
    )
    const polls = await pollstuff.json()
    return { poll: polls, filter: '', checks: [] }
  },
  methods: {
    checkClick(data, target) {
      console.log(this.checks)
      if (target.target.checked === true && !this.checks.includes(data))
        this.checks.push(data)
      else this.checks = this.checks.filter((x) => x !== data)
    },
    async submit() {
      if (localStorage.getItem('votedWaifu'))
        return this.$toast.global.voted_alr()
      const result = this.checks.map((x) => x.name.split(', ').join('_'))
      const res = await this.$axios.$post(
        'https://beta.presidentanimememes.com/poll/annual',
        { data: result }
      )
      if (res.status !== 200) return this.$toast.global.error()
      else {
        this.$toast.global.success()
        localStorage.setItem('votedWaifu', 'YES')
        setTimeout(() => {
          this.$router.push('/thankyou')
        }, 3000)
      }
    },
  },
}
</script>