"""Fetch GitHub repo stats and cache them in _data/software.yml."""

import os
import yaml
import requests


def main():
    with open("_config.yml") as f:
        config = yaml.safe_load(f)
    username = config.get("github_username", "")

    token = os.environ.get("GITHUB_TOKEN", "")
    headers = {"Authorization": f"Bearer {token}"} if token else {}

    with open("_data/software.yml") as f:
        data = yaml.safe_load(f)

    for repo in data.get("github_repos", []):
        name = repo["name"]

        resp = requests.get(f"https://api.github.com/repos/{name}", headers=headers)
        if resp.ok:
            info = resp.json()
            repo["stars"] = info.get("stargazers_count", 0)
            repo["description"] = info.get("description") or ""

        if username:
            resp = requests.get(
                f"https://api.github.com/repos/{name}/contributors?per_page=100",
                headers=headers,
            )
            if resp.ok:
                contributors = resp.json()
                me = next((c for c in contributors if c.get("login") == username), None)
                if me:
                    repo["commits"] = me.get("contributions", 0)

    with open("_data/software.yml", "w") as f:
        yaml.dump(data, f, default_flow_style=False, allow_unicode=True, sort_keys=False)


if __name__ == "__main__":
    main()
