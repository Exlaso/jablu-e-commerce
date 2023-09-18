const CryptoJS = require("crypto-js");

export const SignupUser = async (
  token: string,
  {
    user_first_name,
    user_last_name,
    user_email,
    user_password,
    isverified,
    unique_id,
  }: {
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_password: string;
    isverified: boolean;
    unique_id: string;
  }
) => {
  const response = await fetchGraphQL("SignupUser", token, {
    user_email,
    unique_id,
    user_first_name,
    user_last_name,
    user_password,
    isverified,
  });
  return response;
};
export const IsPasswordMatched = async (
  token: string,
  { password }: { password: string }
) => {
  const response = await fetchGraphQL("IsPasswordMatched", token);
  const bytes = CryptoJS.AES.decrypt(
    response.data.users.at(0).user_password,
    process.env.JWT_KEY as string
  );
  let plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext === password;
};

export const IsEmailExists = async (token: string) => {
  const response = await fetchGraphQL("IsEmailExists", token);

  return !(response.data.users.length === 0);
};

export const GetUserImage = async (token: string) => {
  const response = await fetchGraphQL("GetUserImage", token);
  return response.data.users.at(0).user_pfp;
};

const doperationsDoc = `

query IsEmailExists {
  users {
    user_email
  }
}

query GetUserImage {
  users {
    user_pfp
  }
}

query IsPasswordMatched {
  users {
    user_password
  }
}


mutation SignupUser($unique_id: String!,$user_email:String!,$user_first_name:String!,$user_last_name:String!,$user_password:String!,$isverified: Boolean!) {
    insert_users_one(object: {user_email: $user_email, user_first_name: $user_first_name, user_last_name: $user_last_name, user_password: $user_password,isverified: $isverified,unique_id: $unique_id}) {
      unique_id
      user_email
      user_first_name
      user_last_name
      isverified
    }
  }
  `;

export default async function fetchGraphQL(
  operationName: string,
  token: string,
  variables: object = {},
  operationsDoc: string = doperationsDoc
) {
  const result = await fetch(process.env.Hasura_URL as string, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });
  return await result.json();
}
