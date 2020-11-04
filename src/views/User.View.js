export default {
  render(user) {
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      email: user.email,
    };
  },

  renderMany(users) {
    return users.map((user) => this.render(user));
  },
};
